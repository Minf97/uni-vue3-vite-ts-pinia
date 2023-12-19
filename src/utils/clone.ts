// 深拷贝
// export function deepClone<T>(source: T): T {
//   return Array.isArray(source)
//     ? source.map((item) => deepClone(item))
//     : source instanceof Date
//     ? new Date(source.getTime())
//     : source && typeof source === 'object'
//     ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
//         Object.defineProperty(
//           o,
//           prop,
//           Object.getOwnPropertyDescriptor(source, prop)!
//         );
//         o[prop] = deepClone((source as { [key: string]: any })[prop]);
//         return o;
//       }, Object.create(Object.getPrototypeOf(source)))
//     : (source as T);
// }

export function deepClone(obj, cache = new WeakMap()) {
  // 如果是基本类型或 null，则直接返回
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // 检查缓存，如果已经存在拷贝，则直接返回缓存的拷贝对象
  if (cache.has(obj)) {
    return cache.get(obj);
  }

  // 创建拷贝对象
  const copy = Array.isArray(obj) ? [] : {};

  // 将拷贝对象添加到缓存中
  cache.set(obj, copy);

  // 遍历对象的属性，并进行递归拷贝
  Object.keys(obj).forEach((key) => {
    copy[key] = deepClone(obj[key], cache);
  });

  return copy;
}
