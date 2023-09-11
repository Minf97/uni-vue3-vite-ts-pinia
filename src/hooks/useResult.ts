export const useResult = () => {

  const result = reactive({});
  function changeResult(id, val) {
    result[id] = val;
    console.log("result赋值了：", result);
  }
  function delResult(id) {
    delete result[id]
    console.log("result删除了键值：", result);
  }

  return {
    result,
    changeResult,
    delResult
  };
};
