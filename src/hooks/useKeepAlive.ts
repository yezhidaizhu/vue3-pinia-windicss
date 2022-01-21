import { getCurrentInstance, onMounted } from 'vue';
import usePage from '@/store/usePage';

/**
 * 用于 KeepAlive 当前页面。
 * (
 *  可控，当路由已经配置keepAlive=true，也可以根据此处的 keepAlive() 函数进行控制，
 * )
 * 值得注意的是：当前进行 keepAlive 的路由都是没有 children 的
 * 原理：将要缓存的组件名存入 store 中，并传给 keep-alvie 的 include 中。
 */
export default function useKeepAlive(options?: Options) {
  const { immediate = true } = options || {};

  const currentComp = getCurrentInstance();
  const currentCompName = currentComp?.type?.name;

  const { addKeepAlivePage, rmKeepAlivePage, isKeepAlive } = usePage();

  /**
   * 是否进行缓存
   */
  const keepAlive = (isCache = true) => {
    if (!currentCompName) return;
    isCache ? addKeepAlivePage(currentCompName) : rmKeepAlivePage(currentCompName);
  };

  /**
   * 根据名字查询组件是否在 缓存列表 中,
   * 默认查询当前组件
   */
  const _isKeepAlive = (queryName: string) => {
    const qName = queryName ?? currentCompName;
    return !qName ? false : isKeepAlive(qName);
  }

  onMounted(() => { immediate && keepAlive(); });

  return {
    keepAlive,
    isKeepAlive: _isKeepAlive
  }
}

type Options = {
  immediate?: Boolean,  // 是否立即触发 keepAlive 默认为 true
}