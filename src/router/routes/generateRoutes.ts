/* 
*  以下代码为自动生成
*  即自动引入 pages 下的所有 route.ts(js) 文件
*/
import Home from '@/pages/Home/router';

const allGenerateRoutes = [
  	...Home,

];

/** 注入 name */
allGenerateRoutes.map(route => {
  const { path, component: asyncComp } = route;

  const _path = path.replace(/:/g, "Q").replace(/[^\d\w]/g, "Go"); 

  route.component = async () => {
    const comp = await asyncComp();
    if (!comp.default.name) {
      comp.default.name = _path;
    }
    return comp;
  }
});

export default allGenerateRoutes;
