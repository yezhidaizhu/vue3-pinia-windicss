import { defineStore } from 'pinia'
import Config from '@/config/index'

const defaultLayout = Config.defaultLayout;

export default defineStore('page', {
  state: (): {
    layout: String,
    keepAliveList: Array<String>
  } => ({
    layout: defaultLayout,
    keepAliveList: [],    // cache
  }),
  actions: {
    setLayout(layoutName: string) {
      if (!layoutName || this.layout === layoutName) return;
      this.layout = layoutName || defaultLayout;
    },
    addKeepAlivePage(compName: string) {
      if (!compName || this.keepAliveList.find(c => c == compName)) return;
      this.keepAliveList.push(compName)
    },
    rmKeepAlivePage(compName: string) {
      const index = this.keepAliveList.findIndex(c => c === compName);
      if (index === -1) return;
      this.keepAliveList.splice(index, 1)
    },
    isKeepAlive(queryName: string) {
      return !!this.keepAliveList.find(c => c === queryName);
    }
  }
});