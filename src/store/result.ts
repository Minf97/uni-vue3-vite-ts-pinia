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

    const findKey = (key: string): boolean => {
      key = handleKey(key);
      return result.value[key] ? true : false
    }

    return {
      result,
      changeResult,
      delResult,
      findKey
    };
  },
  // {
  //   persist: {
  //     enabled: true
  //   }
  // }
);

function handleKey(key: string) {
  const match = key.match(/id(\d+)/);
  if (match) {
    const id = match[1];
    key = key.replace(/-id.+-/, id);
  }
  return key
}
