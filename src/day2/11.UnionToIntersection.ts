// 将联合类型转换为交叉类型

// type A = UnionToIntersection<{a: string} | {b: string} | {c: string}> 
// {a: string} & {b: string} & {c: string}
 
type Step1<T> = (T extends any ? ((t: T) => void) : never)
type val1 = Step1<{ a: string } | { b: string } | { c: string }>
