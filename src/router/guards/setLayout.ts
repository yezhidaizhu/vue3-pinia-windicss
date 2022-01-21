import { RouteLocationNormalized } from "vue-router";
import Config from '@/config/index'
import usePage from "@/store/usePage";


export default (to: RouteLocationNormalized) => {
  const { meta: { layout = Config.defaultLayout } } = to;
  const pageStore = usePage();

  pageStore.setLayout(layout + "");
}