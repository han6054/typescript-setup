export default {}
// 反转元组

type A = ReverseTuple<[string, number, boolean]> // [boolean, number, string]
type B = ReverseTuple<[1, 2, 3]> // [3,2,1]
type C = ReverseTuple<[]> // []

type ReverseTuple<T, TT extends any[] = []> = T extends [infer L, ...infer R] ? ReverseTuple<R, [L, ...TT]> : TT