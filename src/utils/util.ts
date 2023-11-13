import { handleDepends_on, useDepend } from "@/hooks/useDepend";
import { deepClone } from "./clone";
import { watch } from "vue";



/**
 * 处理depends_on字段的内容
 * 有五种可能性:`null`、`name`、`<choice name>`、`name1 && <choice name2>`、`name1 && name2 && <choice name3>`
 * @param str depends_on字段
 * @returns [name1, name2]
 */
export function handleDepends_on1(str: string | null) {
  let result: any[] = [];
  const regex = /<[^<>]*>/;

  // null
  if (!str) return result;
  // 存在 &&
  if (str.includes('&&')) {
    const a = str
      .split('&&')
      .filter(item => item.trim() && !regex.test(item))
      .map(item => item.replace(/\s*/g, ''));

    result = result.concat(a)
  }
  // 不存在 &&
  else {
    const match = str.match(regex);
    if (!match) return [str];
    result.push(str.match(/<choice\s+([^>]+)>/)[1]); // 提取匹配到的内容
  }
  return result;
}

/**
 * 检查是否可以渲染该type组件
 * @param data 待检查的数据
 * @param type 类型
 * @returns boolean
 */
export function checkIfCanShow(data: Kconfig.children, type: Kconfig.Type) {
  // menu单独处理
  if (type == 'menu') return data.title !== null && (data.type == type);
  if (type == 'menu2') return data.title !== null && (data.type == type);

  return data.name && (data.type == type) && data.title !== null
}

/**
 * 检查服务器的缓存值是否正确
 * @param config 服务器缓存值
 * @returns
 */
export function filterConfigValue(config) {
  const { JSONList, delResult, findJSONListKey } = useStore('result')
  const configKeys = Object.keys(config);
  const newConfig = deepClone(config);

  // 将key的CONFIG_前缀去掉
  for (let key in newConfig) {
    const val = newConfig[key];
    delete newConfig[key];
    const newKey = key.replace(/^CONFIG_/, (match) => "");
    newConfig[newKey] = val;
  }

  const delConfigKey = (key) => {
    key = key.replace(/-id(\d+)-/g, "$1");
    delete newConfig[key];
    // delResult(key);
  }

  const handleCustom = (key) => {
    // debugger
    const newkey = key.replace(/_(\d+)_/g, "_-id1-_")
    const res = findJSONListKey(newkey);
    // choice
    if (typeof res === 'object') {
      res.forEach(item => delConfigKey(item)) // 全部干掉再赋值服务器的缓存值
      newConfig[key] = config[key];
    }

    // 清除不存在的值
    if (!res) {
      delete newConfig[key]
    }
  }

  const handlePrimary = (key) => {
    const res = findJSONListKey(key)
    // choice
    if (typeof res === 'object') {
      res.forEach(item => delConfigKey(item)) // 全部干掉再赋值服务器的缓存值
      newConfig[key] = config[key];
    }
    // 清除不存在的值
    if (!res) {
      delete newConfig[key]
    }
  }

  // 旧值不要：JSONList不存在的值，也会过滤掉
  // 注意不要把自定义key给过滤掉了
  configKeys.forEach(key => {
    const ifCustomKey = /_(\d+)_/.test(key);
    ifCustomKey ? handleCustom(key) : handlePrimary(key);
  })



  // console.log(newConfig, "newConfig1");

  return newConfig
}

/**
 * 深度遍历，
 * @param obj 对象
 * @param name name值
 * @param value
 * @returns
 */
export function addDefaultRecursive(obj, name, value, parent = null) {
  const { findJSONListKey, result, delResult } = useStore('result')
  // 对默认值做一层处理
  obj.default && (obj.default = removeEscapedQuotes(obj.default));

  // 对名称做一层处理
  let objName = obj.name;
  if (objName && objName.match(/-id(\d+)-/)) {
    objName = objName.replace(/-id(\d+)-/, '1');
  }

  // 匹配成功
  if (objName === name) {
    if (parent && parent.type == 'choice') {
      const choiceList = findJSONListKey(obj.name);
      const resultKeys = Object.keys(result.value);
      const defaultKeyList = choiceList.filter(item => resultKeys.includes(item.replace(/-id(\d+)-/g, "$1")));
      defaultKeyList.length && defaultKeyList.forEach(defaultKey => delResult(defaultKey));
      parent.value = obj.name;
    }
    else {
      obj.value = value;
      obj.default = value;
    }
  }

  // 这里遇到带数字的，需要自动新增key
  // CL_REMOTE_CONTROL_1_FUN_OFF
  // CL_REMOTE_CONTROL_2_FUN_OFF

  if (Array.isArray(obj.children) && obj.children.length > 0) {
    for (const child of obj.children) {
      addDefaultRecursive(child, name, value, obj);
    }
  }

  return obj;
}

/**
 * 深度遍历2，修改名字和依赖
 * @param obj 对象
 * @param name name值
 * @param value
 * @returns
 */
export function addResultRecursive(obj, parent = null) {
  const { changeResult, setJSONList } = useStore('result')
  // 修改名字和依赖(针对自定义key)
  if (obj.name && obj.name.match(/-id-/)) {
    obj.name = obj.name.replace(/-id-/, '-id1-');
    obj.depends_on = obj.depends_on ? obj.depends_on?.replace(/-id-/g, '-id1-') : obj.depends_on;

    console.log(obj.name, 77776);
  }
  // 将默认值加入result
  if (handleDepends_on(obj.depends_on) && obj.name) {
    if(parent?.type == 'choice' && obj.default === 'y') {
      parent.value = obj.name;
      changeResult(obj.name, obj.default, parent);
    }
    else {
      changeResult(obj.name, obj.default, obj);
      obj.value = obj.default;
    }

  }

  if (parent?.type != 'choice') {
    setJSONList(obj);
  }

  if (Array.isArray(obj.children) && obj.children.length > 0) {
    for (const child of obj.children) {
      addResultRecursive(child, obj);
    }
  }
}

/**
 * 深度遍历3，
 * @param obj 对象
 * @param name name值
 * @param value
 * @returns
 */
export function treeRecursive(obj) {
  const { flag } = useDepend(obj)
  let flag1 = true;
  if (obj.type == 'menu' || obj.type == 'menu2' || obj.type == 'bool') {
    if (obj.type == 'menu2') {
      // console.log(obj, 6666);
    }
  }
  else if (
    // 没有填写值
    (!obj.value || !obj.value.replace(/""/g, "")) &&
    // 不是禁用项
    !obj.disabled &&
    flag.value
  ) {
    obj.status = 'error';
    flag1 = false;
    console.log(obj, "校验值失败！该项值为空");
  }

  if (Array.isArray(obj.children) && obj.children.length > 0) {
    for (const child of obj.children) {
      if (!treeRecursive(child)) {
        flag1 = false;
        break;
      }
    }
  }

  return flag1
}

/**
 * 深度遍历4，查找树节点
 * @param obj 对象
 * @param name name值
 * @param value
 * @returns
 */
export function findTreeRecursive(obj) {
  const { flag } = useDepend(obj)
  let flag1 = true;
  if (obj.type == 'menu' || obj.type == 'menu2' || obj.type == 'bool') {
    if (obj.type == 'menu2') {
      // console.log(obj, 6666);
    }
  }
  else if (!obj.value && flag.value) {
    obj.status = 'error';
    flag1 = false;
    console.log(obj, "校验值失败！该项值为空");
  }

  if (Array.isArray(obj.children) && obj.children.length > 0) {
    for (const child of obj.children) {
      if (!treeRecursive(child)) {
        flag1 = false;
        break;
      }
    }
  }

  return flag1
}


/**
 * 16进制转10进制
 * @param hex 16进制数
 * @returns 10进制数
 */
export function hexToDecimal(hex: string): number {
  return parseInt(hex, 16);
}

/**
 * 10进制转16进制
 * @param decimal 10进制数
 * @returns 16进制数
 */
export function decimalToHex(decimal: number): string {
  // 使用 toString() 将十进制数值转换为十六进制字符串，并添加前缀 "0x"
  return '0x' + decimal.toString(16).toUpperCase();
}


/**
 * 校验是否是16进制
 */
export function checkIsHex(val: string): boolean {
  const regex = /^0x[0-9A-Fa-f]+$/
  return regex.test(String(val));
}


export function removeEscapedQuotes(str) {
  return str ? str.replace(/^"|"$/g, '') : '';
}

// recursive

export function parseQueryParams(url) {
  const queryString = url.split('?')[1]; // 获取 "?" 后面的查询参数部分
  const params = new URLSearchParams(queryString); // 创建 URLSearchParams 对象

  const queryParams = {}; // 创建空对象存储查询参数

  // 遍历查询参数，将其存储到对象中
  for (const [key, value] of params) {
    queryParams[key] = value;
  }

  return queryParams; // 返回查询参数对象
}
