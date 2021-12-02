//拍平元组
type A = Flat<[1, 2, 3]> // [1,2,3]
type B = Flat<[1, [2, 3], [4, [5, [6]]]]> // [1,2,3,4,5,6]
type C = Flat<[]> // []
type D = Flat<[1]> // [1]

// type Flat<T, TT extends any[] =[]> = T extends [infer L, ...infer R] ? 