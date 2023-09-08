

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
  if(type == 'menu') return data.title && (data.type == type);

  return data.name && data.title && (data.type == type)
}
