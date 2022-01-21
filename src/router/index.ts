import { createRouter, createWebHashHistory } from 'vue-router'
import setTitle from './guards/setTitle'
import setLayout from './guards/setLayout'
import setKeepAlive from './guards/setKeepAlive'

import specialRoute from './routes/index'
import generateRoutes from './routes/generateRoutes'

const Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...specialRoute,
    ...generateRoutes,
  ],
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

Router.beforeEach(setTitle);
Router.beforeEach(setLayout);
Router.beforeEach(setKeepAlive);

export default Router;
