export default defineStore(
  'result',
  () => {
    const result = ref({});

    const changeResult = (key: string, val) => {
      key = handleKey(key);
      result.value[key] = val;
      console.log("result赋值了:", key, val,);
    }
    const delResult = (key: string) => {
      key = handleKey(key);
      delete result.value[key];
      console.log("result删除了键值:", key);
    }

    function handleKey(key: string) {
      const match = key.match(/id(\d+)/);
      if (match) {
        const id = match[1];
        key = key.replace(/-id.+-/, id);
      }
      return key
    }

    return {
      result,
      changeResult,
      delResult
    };
  },
  {
    persist: {
      enabled: true
    }
  }
);
