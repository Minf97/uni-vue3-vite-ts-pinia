import { useFlag } from '@/hooks/useFlag'
import { ref, watch } from 'vue';

export const useDepend = (data) => {
  const { result, changeResult, delResult } = useStore('result');
  const { flag, setFlag } = useFlag(true);

  watch(result, () => {
    // 如果出现不满足，则置位false
    setFlag(handleDepends_on(data.depends_on))

    // 然后深度遍历，如果子(注意只处理子，不处理自身)有默认值，且依赖都打开，则把默认值加到result树上
    function dfsAddDefault(obj) {
      // choice要单独处理：
      //  如果它的依赖项打开了，就去遍历子级，如果有默认值且依赖项打开，放到树里
      // 普通组件的处理：
      //  如果它的依赖项打开了，就深度遍历其子节点，如果子节点依赖打开且有default，就加入到树里
      if (obj.type === 'choice') {
        if (handleDepends_on(obj.depends_on) && !obj.secondChange) {
          for (let child of obj.children) {
            if (child.default == 'y' && handleDepends_on(child.depends_on)) {
              changeResult(child.name, child.default, obj)
            }
          }
        }
      }
      else {
        if (handleDepends_on(obj.depends_on) && !obj.secondChange) {
          console.log(obj.name, "子111");
          // dfs
          if (obj.children.length > 0) {
            for (let child of obj.children) {
              if (
                handleDepends_on(child.depends_on) &&
                child.default !== undefined &&
                child.default !== null &&
                child.default !== "n"
              ) {
                console.log(child.name, "子");
                child.clearFocus = false;

                changeResult(child.name, child.default, child);
                dfsAddDefault(child)
              }
            }
          }
        }
      }
    }


    dfsAddDefault(data);
    // 针对choice
    // if (data.type == 'choice') {
    //   data.children.forEach((item, index) => {
    //     if (!handleDepends_on(item.depends_on)) {
    //       delResult(data.children[index].name);
    //       data.children[index].hide = true;
    //       data.children[index].default = "n";
    //       return;
    //     }
    //     console.log(data);

    //     data.children[index].hide = false;
    //   })
    // }
  }, { immediate: true, deep: true })

  return {
    flag
  }
}


/**
 * 处理depends_on字段的内容
 * 有五种可能性:`null`、`name`、`<choice name>`、`name1 && <choice name2>`、`name1 && name2 && <choice name3>` => [name1, name2, name3]
 * 2023-10-10新增两种可能性 `name1 || name2`  `(name1 && name2) || name3` `(name1 || name2) && name3`  `(name1 || name2) && (name3 || name4)`??
 * @param str depends_on字段
 * @returns [name1, name2]
 */
export function handleDepends_on(str: string | null): boolean {
  const { findKey } = useStore('result');
  const regex = /<[^<>]*>/;

  // 处理 || 的情况
  const handleOr = (str: string): boolean => {
    let list = str
      .split('||')
      .filter(item => item.trim() && !regex.test(item))
      .map(item => item.replace(/\s*/g, ''));

    return list.some(key => findKey(key))
  }
  // 处理 && 的情况
  const handleAnd = (str: string): boolean => {
    let list = str
      .split('&&')
      .filter(item => item.trim() && !regex.test(item))
      .map(item => item.replace(/\s*/g, ''));

    return list.every(key => findKey(key))
  }

  // 先要把 -id123- 处理一下
  if (str && str.match(/-id(\d+)-/)) {
    str = str.replace(/-id(\d+)-/g, "$1");
  }
  // 还要把 <choice xxx> 处理一下
  // if(regex.test(str)) {
  //   str = str?.replace(/<choice(\s\w+)>/, "$1")
  // }

  // null 最简单的情况
  if (!str) return true;
  // 多元计算 - 最复杂的情况 - 同时存在 && 和 ||
  if (str.includes('&&') && str.includes('||')) {
    console.log(str, "检查str出现目标");
    const regex1 = /\([^()]*\)/;
    // 第一个表达式
    const first = str.match(regex1)[0];
    // 第一个表达式的结果
    let firstResult;

    // 第二个表达式
    const second = str.split(first).filter(item => item)[0];

    // 如果第一个表达式是 ||
    if (first.includes('||')) {
      firstResult = handleOr(first.replace(/\(|\)/g, ""));
      console.log(first, firstResult, "第一个表达式结果");

      const secondKey = second.replace("&&", "").replace(/\s/g, "");
      console.log(secondKey, findKey(secondKey), "第二个表达式结果");

      return findKey(secondKey) && firstResult;
    }
    // 如果第一个表达式是 &&
    else {
      firstResult = handleAnd(first);
      const secondKey = second.replace("||", "").replace(/\s/g, "");
      return findKey(secondKey) && firstResult;
    }

  } else {
    // 仅存在 &&
    if (str.includes('&&')) return handleAnd(str)
    // 仅存在 ||
    if (str.includes('||')) return handleOr(str)
    // 是 name1 或 <choice name1>
    if (!regex.test(str)) return findKey(str)
    // <choice name1>
    return true;
  }
}
