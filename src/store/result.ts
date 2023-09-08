export default defineStore(
  'result',
  () => {
    const result = ref({});

    function changeResult(id, val) {
      result.value[id] = val;
      console.log("result赋值了:", id, val, );
    }
    function delResult(id) {
      delete result.value[id]
      console.log("result删除了键值:", id);
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
