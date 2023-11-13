import { ref } from 'vue';
import { handleDepends_on1 } from '@/utils/util';
import { handleDepends_on } from "@/hooks/useDepend"
import { useStore } from '@/helper/pinia-auto-refs';

export default defineStore(
  'result',
  () => {
    const result = ref({});
    const JSONList = ref<string[] | string[][]>([]);
    const { state } = useStore('app');

    const setJSONList = (obj) => {
      // menu、menu2不要
      if (obj.type == 'menu' || obj.type == 'menu2') return;
      // choice单独处理
      if (obj.type == 'choice') {
        let list = obj.children.map(item => item.name.replace(/-id-/g, "-id1-"));
        JSONList.value.push(list);
      }
      // 此时只有bool、string、int
      else {
        JSONList.value.push(obj.name)
      }
    }

    const findJSONListKey = (key): boolean | string[] => {
      const choiceList = JSONList.value.filter(key => typeof key === 'object');
      const bool = JSONList.value.includes(key);
      if (!bool) {
        const res = choiceList.filter(item => item.includes(key));
        return res.length ? res[0] : false
      }
      return bool
    }

    // 赋值
    const changeResult = (key: string, val, obj: Kconfig.children) => {
      key = handleKey(key);
      result.value[key] = val;

      if(!val) return;

      obj.value = val ;
      obj.secondChange = true;
      obj.clearFocus = false;
      if (obj.type === 'choice') {
        for (let child of obj.children) {
          // console.log(child.name, key, "help");
          let name = child.name.replace(/-id(\d+)-/, "$1");
          console.log(obj.name, name, key);
          if (name == key) {
            obj.value = child.title;
            console.log(obj,obj.value, key, "----------");

          }
        }
      }
      console.log("result赋值了:", key, val, obj);
    }

    // 删除键值
    const delResult = (key: string, obj: null | Kconfig.children = null) => {
      if (key) {
        key = handleKey(key);
        delete result.value[key];
      }

      const nameList = new Set();

      if (obj) {
        obj.value = null;
        // obj.default = null;
        // 子依赖项要删除
        function findDependChild(arr, name) {
          let realName = name;
          if (name.match(/-id[\w\d]+-/)) {
            realName = name.replace(/-id[\w\d]+-/, '-id-');
          }
          nameList.add(realName);
          for (let i = 0; i < arr.length; i++) {
            const node = arr[i];
            const dependsList = handleDepends_on1(node.depends_on);
            const intersection = findIntersection(dependsList, Array.from(nameList));

            if (intersection) {
              // console.log(intersection, intersection.filter(item => item));
              // intersection有可能是 [undefined]
              if (intersection.filter(item => item).length > 0) {
                node.value = null;
                node.clearFocus = true;
                node.secondChange = false;
                if (node.name) {
                  let realName = node.name;
                  if (node.name.match(/-id[\w\d]+-/)) {
                    realName = node.name.replace(/-id[\w\d]+-/, '-id-');
                  }
                  nameList.add(realName);
                  const nodeKey = handleKey(node.name);
                  delete result.value[nodeKey];
                  delChildKey(node);
                  console.log(node, nodeKey, "删除子依赖项的key");
                }
              } else {
                // console.log(dependsList, nameList, intersection, node.name);
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
              if (item.name) {
                const objKey = handleKey(item.name);
                delete result.value[objKey];
                // console.log(objKey, "删除son的key");
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
      // console.log(key, result.value[key], (result.value[key] && result.value[key] != "n"), "handleKey后的key");

      return (result.value[key] && result.value[key] != "n") ? true : false
    }

    return {
      result,
      JSONList,
      // formList,
      changeResult,
      delResult,
      findKey,
      setJSONList,
      findJSONListKey
    };
  }
);

function handleKey(key: string) {
  const match = key.match(/id(\d+)/);
  if (match) {
    const id = match[1];
    key = key.replace(/-id(\d+)-/, id);
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
