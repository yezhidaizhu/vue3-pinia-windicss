import { LayoutNames } from "@/Layout";

export default [
  {
    path: '/',
    component: () => import("./Index/Home.vue"),
    meta: {
      title: "Home",
    }
  },
  {
    path: '/demo1',
    component: () => import("./Index/Demo1.vue"),
    meta: {
      title: "Demo",
      layout: LayoutNames.demo,
      keepAlive: true,
    }
  },
  {
    path: '/demo2',
    component: () => import("./Index/Demo2.vue"),
    meta: {
      title: "Demo",
      layout: LayoutNames.demo,
    }
  },
];

