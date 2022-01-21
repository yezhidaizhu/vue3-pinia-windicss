import usePage from '@/store/usePage';
import { RouteLocationNormalized } from 'vue-router';

/**
 * 根据 meta 中的 keepAlive=true，尝试将页面组件名字 name 写入 pageCache
 * 注意：只保存 route.matched 只有一个的组件，这是为了与 usekeepAlive 保持一致，
 *      所以，此处对有 children 的路由不进行处理。 
 */
export default function keepAliveNoChildrenRoute(to: RouteLocationNormalized) {
  const { matched, meta: { keepAlive = false } } = to;
  const pageStore = usePage()

  if (!keepAlive || matched?.length !== 1) return;

  const componetName = matched?.[0]?.components?.default?.name;
  if (!componetName) return;

  pageStore.addKeepAlivePage(componetName);
}
