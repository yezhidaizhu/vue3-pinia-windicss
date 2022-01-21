import usePage from '@/store/usePage';
import { LayoutNames, LayoutName } from '@/Layout/index';

/**
 * 更改当前页面的布局
 * 也可以直接在路由的 meta 中指定 layout，
 * 如果上述同时存在，因为 useLayout 运行在后，所以以 useLayout 指定为主
 * eg: useLayout(lyn=>lyn.default)
 */
export default function useLayout(cb: (layoutName: typeof LayoutNames) => LayoutName) {
  const pageStore = usePage();

  const setLayout = (cb: (layoutName: typeof LayoutNames) => LayoutName) => {
    const layoutName = cb?.(LayoutNames);
    if (!LayoutNames[layoutName]) return console.error(`[useLayout]: layout name [${layoutName}] non-existent`);

    layoutName !== getCurLayoutName() && pageStore.setLayout(layoutName);
  };

  const getCurLayoutName = () => pageStore.layout;

  cb && setLayout(cb);

  return {
    setLayout,
    getCurLayoutName
  }
}



