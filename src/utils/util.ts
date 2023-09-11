

/**
 * 处理depends_on字段的内容
 * 有五种可能性:`null`、`name`、`<choice name>`、`name1 && <choice name2>`、`name1 && name2 && <choice name3>`
 * @param str depends_on字段
 * @returns [name1, name2]
 */
export function handleDepends_on(str: string | null) {
  const result: any[] = [];
  const regex = /<[^<>]*>/;

  // null
  if (!str) return result;
  // 存在 &&
  if (str.includes('&&')) {
    const a = str.split('&&').filter(item => item.trim() && !regex.test(item));
    result.concat(a)
  }
  // 不存在 &&
  else {
    if (!regex.test(str)) return [str];
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

  return data.name && data.title && (data.type == type)
}



function compareStrings(str1, str2) {
  const placeholderRegex = /-id-/;
  // 查找字符串中的数字部分
  const numRegex = /\d+/;
  const match2 = str2.match(numRegex);

  if (match2) {
    const num2 = match2[0];
    // 将占位符替换为提取到的数字部分
    const replacedStr1 = str1.replace(placeholderRegex, num2);
    return replacedStr1 === str2;
  }

  return false;
}

/**
 * 深度遍历，
 * @param obj 对象
 * @param name name值
 * @param value
 * @returns
 */
export function addDefaultRecursive(obj, name, value) {

  if (obj.name === name) {
    obj.default = value;
  }

  if (obj.name && obj.name.match(/-id-/)) {
    obj.name = obj.name.replace(/-id-/, '-id1-');
  }


  if (Array.isArray(obj.children) && obj.children.length > 0) {
    for (const child of obj.children) {
      addDefaultRecursive(child, name, value);
    }
  }

  return obj;
}

// recursive
