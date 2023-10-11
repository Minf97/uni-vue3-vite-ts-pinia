import { reactive } from "vue";

export default defineStore({
  id: 'app',
  state: () => {
    return {
      systemInfo: {},
      state: reactive({ kconfig: [] })
    } as {
      systemInfo: UniApp.GetSystemInfoResult;
      state: { kconfig: [] }
    };
  },
  actions: {
    getSystemInfo(): UniApp.GetSystemInfoResult {
      if (Object.keys(this.systemInfo).length) return this.systemInfo;
      const systemInfo = uni.getSystemInfoSync();
      Object.assign(this.systemInfo, systemInfo);
      return systemInfo;
    },
    findTreeNode(name) {
      for (let i = 0; i < this.state.kconfig.length; i++) {
        const node = this.state.kconfig[i];
        const targetNode = recursive(node, name);

        if (targetNode) {
          return targetNode
        }
      }

      function recursive(node, name) {
        if (node.name === name) {
          console.log(node.name, name, 9999);
          return node;
        }
        if (node.children.length > 0) {
          for (const child of node.children) {
            const targetNode = recursive(child, name);
            if (targetNode) {
              return targetNode;
            }
          }
        }
        return null
      }
    },
  }
});
