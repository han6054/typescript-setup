// 复制类型T为C个元素的元组类型
export default {}

type A = Repeat<number, 3> // [number, number, number]
type B = Repeat<string, 2> // [string, string]
type C = Repeat<1, 1> // [1]
type D = Repeat<0, 0> // []

type Repeat<T, U extends number, Prev extends any[] = []> = Prev["length"] extends U ? Prev : Repeat<T, U, [...Prev, T]>