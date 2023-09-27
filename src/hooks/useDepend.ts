import { useFlag } from '@/hooks/useFlag'
import { handleDepends_on } from '@/utils/util';
import { ref, watch } from 'vue';

export const useDepend = (data) => {
  const { result, delResult } = useStore('result');
  const { flag, setFlag } = useFlag(true);

  const dependList = handleDepends_on(data.depends_on);
  watch(result, () => {
    // 首先置位true
    setFlag(true)
    // 如果出现不满足，则置位false
    dependList.map(item => {
      if (!result.value[item]) setFlag(false)
    })

    // 针对choice
    if (data.type == 'choice') {
      data.children.forEach((item, index) => {
        const childDependList = handleDepends_on(item.depends_on);
        console.log(childDependList);
        childDependList.map(item => {

          if (!result.value[item]) {
            delResult(data.children[index].name);
            data.children[index].hide = true;
            data.children[index].default = false;
            return;
          }
          data.children[index].hide = false;
        })
      })
    }
  }, { immediate: true, deep: true })

  return {
    flag
  }
}
