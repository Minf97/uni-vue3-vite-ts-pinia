import { useFlag } from '@/hooks/useFlag'
import { handleDepends_on } from '@/utils/util';


export const useDepend = (data) => {
  const { result } = useStore('result');
  const { flag, setFlag } = useFlag(true);

  const dependList = handleDepends_on(data.depends_on);
  watch(result, () => {
    // 首先置位true
    setFlag(true)
    // 如果出现不满足，则置位false
    dependList.map(item => {
      if (!result.value[item]) setFlag(false)
    })
  }, { immediate: true, deep: true })

  return {
    flag
  }
}
