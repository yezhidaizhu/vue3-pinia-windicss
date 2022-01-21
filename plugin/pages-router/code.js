import { getPageFiles } from '../utils/files'

// 转化为可引入模式
// ['.../src/pages/OA/index.ts'] => ['@/pages/OA/index.ts']
export function getImport(filesArr = [], root = "") {
  root = root.endsWith("/") ? root.slice(0, -1) : root;
  return filesArr?.map(x => x.replace(root, '@/pages'))
}

// 设置引入的名字，防止重名，使用路径加下划线进行命名
const setFileImportName = (fileName = "") => {
  return fileName.match(/pages\/(.*)\//)[1].replace(/\//g, '_');
}

// ['@/OA/index.ts'] => 'import OA from @/pages/OA/index.ts;'
export function getImportCode(filesArr = []) {
  let codeStr = "";
  filesArr.map(file => {
    // '@/pages/OA/Demo/index.ts' => 'OA_Demo'
    const importName = setFileImportName(file);
    codeStr += `import ${importName} from '${file.slice(0,file.lastIndexOf("."))}';\n`;
  })

  return codeStr;
}

// ['@/pages/OA/index.ts'] => 'export default [...OA,];'
export function getRouterCode(filesArr) {
  let importCode = '';
  filesArr.map(file => {
    const importName = setFileImportName(file);
    importCode += `\t...${importName},\n`;
  })

  return `
const allGenerateRoutes = [
  ${importCode}
];

/** 注入 name */
allGenerateRoutes.map(route => {
  const { path, component: asyncComp } = route;

  const _path = path.replace(/:/g, "Q").replace(/[^\\d\\w]/g, "Go"); 

  route.component = async () => {
    const comp = await asyncComp();
    if (!comp.default.name) {
      comp.default.name = _path;
    }
    return comp;
  }
});

export default allGenerateRoutes;
`;
}


export function getImportRouterCode(root) {
  const pagesPath = `${root}/src/pages`;
  const pagesFilesPath =['router.ts','router.js'].map(fname=>`${pagesPath}/**/${fname}`);

  const dirs = getImport(getPageFiles(pagesFilesPath), pagesPath);
  // 排序一下，使得文件相同的放在一起
  dirs.sort();

  const importCode = getImportCode(dirs);
  const routerCode = getRouterCode(dirs);
  return importCode + routerCode;
}