
export const useFlag = (initVal: Boolean) => {
  const flag = ref(initVal);
  function setFlag(val: boolean) {
    flag.value = val;
    console.log("flag置位:", val);

  }
  return {
    flag,
    setFlag
  };
};
