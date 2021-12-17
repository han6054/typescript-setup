// 取出来联合类型中的任意一个类型
type a = 1 | 2 | 3
type b = UnionPop<a>;       // 3

type UnionPop<T> = ''