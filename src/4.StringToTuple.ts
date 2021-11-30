export default {};
// 字符串转换为元组类型
type A = StringToTuple<"BFE.dev">; // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<"">; // []

type StringToTuple<T, A extends any[] = []> = T extends `${infer L}${infer R}`
  ? StringToTuple<R, [...A, L]>
  : A;
