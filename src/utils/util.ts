import { useDepend } from "@/hooks/useDepend";


/**
 * 处理depends_on字段的内容
 * 有五种可能性:`null`、`name`、`<choice name>`、`name1 && <choice name2>`、`name1 && name2 && <choice name3>`
 * @param str depends_on字段
 * @returns [name1, name2]
 */
export function handleDepends_on(str: string | null) {
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
    if (!regex.test(str)) return [str];
  }
  return result;
}


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
  if (type == 'menu') return data.title && (data.type == type);
  if (type == 'menu2') return data.title && (data.type == type);

  return data.name && (data.type == type)
}


/**
 * 深度遍历，
 * @param obj 对象
 * @param name name值
 * @param value
 * @returns
 */
export function addDefaultRecursive(obj, name, value) {
  if (obj.name && obj.name.match(/-id-/)) {
    obj.name = obj.name.replace(/-id-/, '-id1-');
  }

  if (obj.name === name) {
    obj.default = value;
  }

  if (Array.isArray(obj.children) && obj.children.length > 0) {
    for (const child of obj.children) {
      addDefaultRecursive(child, name, value);
    }
  }

  return obj;
}

/**
 * 深度遍历2，
 * @param obj 对象
 * @param name name值
 * @param value
 * @returns
 */
export function addResultRecursive(obj) {
  const { changeResult } = useStore('result');

  if (obj.name && obj.name.match(/-id-/)) {
    obj.name = obj.name.replace(/-id-/, '-id1-');
  }
  if (obj.default) {
    changeResult(obj.name, obj.default);
    obj.value = obj.default;
  }

  if (Array.isArray(obj.children) && obj.children.length > 0) {
    for (const child of obj.children) {
      addResultRecursive(child);
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
      console.log(obj, 6666);
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
      console.log(obj, 6666);
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
  return str ? str.replace(/"/g, '') : '';
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
