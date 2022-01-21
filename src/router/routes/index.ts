
/**
 * 其它页面定义
 */

export default [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/',
  },
];
