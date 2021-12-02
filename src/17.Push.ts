export default {}
//在元组类型T中添加新的类型I
type A = Push<[1,2,3], 4> // [1,2,3,4]
type B = Push<[1], 2> // [1, 2]

type Push<T extends number[], U> =  U extends number ? [...T, U]: never