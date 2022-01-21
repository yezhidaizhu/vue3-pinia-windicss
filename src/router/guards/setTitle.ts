import { RouteLocationNormalized } from "vue-router"
import { useTitle } from '@vueuse/core'
import Config from '@/config/index'

export default (to: RouteLocationNormalized) => {
  const { meta: { title = Config.defaultTitle } } = to;
  useTitle(title + "");
}