import Default from "./default.vue";
import DemoLayout from "./demoLayout.vue";

/**
 * 注册布局
 */

const Layouts = {
  default: Default, // 默认布局
  demo: DemoLayout,
};

export default Layouts;
export type LayoutName = keyof typeof Layouts;

export const LayoutNames: { [prop in LayoutName]?: string } = {};
Object.keys(Layouts)?.map((k) => LayoutNames[k as LayoutName] = k);


