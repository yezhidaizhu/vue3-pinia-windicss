import { getImportRouterCode } from './code'
import { writeRouterFile } from '../utils/files'

/**
 * 将 @/pages/anyFileName/index.t(j)s 中的路由，
 * 动态引入并生成 @/router/generateRoutes.js 文件
 */

let importRouterCode = `/* 
*  以下代码为自动生成
*  即自动引入 pages 下的所有 route.ts(js) 文件
*/\n`;

export default () => {
  return {
    name: 'wx-pages-plugin',
    configResolved({ root }) {
      importRouterCode += getImportRouterCode(root);

      const filesName = 'generateRoutes.ts';
      writeRouterFile(`${root}/src/router/routes/${filesName}`, importRouterCode);
    },
  }
}