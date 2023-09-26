import { ref } from 'vue';
import { handleDepends_on, handleDepends_on1 } from '@/utils/util';
import { useStore } from '@/helper/pinia-auto-refs';

export default defineStore(
  'result',
  () => {
    const result = ref({});
    const { findTreeNode, state } = useStore('app')

    const changeResult = (key: string, val) => {
      key = handleKey(key);
      result.value[key] = val;
      console.log("result赋值了:", key, val,);
    }


    const delResult = (key: string, obj: null | Kconfig.children = null) => {
      if (key) {
        key = handleKey(key);
        delete result.value[key];
      }

      const nameList = [];
      if (obj) {
        obj.value = null;
        obj.default = null;
        // 子依赖项要删除
        function findDependChild(arr, name) {
          nameList.push(name);
          for (let i = 0; i < arr.length; i++) {
            const node = arr[i];
            const dependsList = handleDepends_on1(node.depends_on);
            const intersection = findIntersection(dependsList, nameList);
            if (intersection) {
              nameList.push(node.name);
              node.value = null;
              node.default = null;
              if (node.name) {
                const nodeKey = handleKey(node.name);
                delete result.value[nodeKey];
                console.log(node, nodeKey, "删除子依赖项的key");
              }

            }
            if (node.children.length > 0) {
              findDependChild(node.children, name);
            }
          }
        }
        // 子要删除
        function delChildKey(obj) {
          if (obj.children.length > 0) {
            obj.children.map(item => {
              item.value = null;
              item.default = null;
              if (item.name) {
                const objKey = handleKey(item.name);
                delete result.value[objKey];
                console.log(objKey, "删除son的key");
              }
              delChildKey(item)
            })
          }
        }
        findDependChild(state.value.kconfig, obj.name);
        delChildKey(obj)
      }
      console.log("result删除了键值:", key);
    }

    const findKey = (key: string): boolean => {
      key = handleKey(key);
      return result.value[key] ? true : false
    }

    return {
      result,
      // formList,
      changeResult,
      delResult,
      findKey
    };
  },
  {
    persist: {
      enabled: true
    }
  }
);

function handleKey(key: string) {
  const match = key.match(/id(\d+)/);
  if (match) {
    const id = match[1];
    key = key.replace(/-id.+-/, id);
  }
  return key
}


function findIntersection(arr1, arr2) {
  const intersection = arr1.filter(item => arr2.includes(item));

  if (intersection.length > 0) {
    return intersection;  // 返回相交的元素数组
  } else {
    return false;  // 返回 false 表示没有相交元素
  }
}
