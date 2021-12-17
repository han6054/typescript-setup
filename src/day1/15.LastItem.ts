// 得到元组类型中的最后一个元素
export default {}
type A = LastItem<[string, number, boolean]> // boolean
type B = LastItem<['B', 'F', 'E']> // 'E'
type C = LastItem<[]> // never

type LastItem<T> = T extends [...infer L, infer R] ? R: never