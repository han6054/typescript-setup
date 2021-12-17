// 找出E类型在元组类型T中的下标
export default {}

type A = [any, never, 1, '2', true]
type B = FindIndex<A, 1> // 2
type C = FindIndex<A, 3> // never
type D = FindIndex<A, '2'> 

type Equal<T, K> = [T] extends [K] ? [K] extends [T] ? 
            (keyof T extends keyof K ? 
                keyof K extends keyof T ? true: false : false): false: false


export type FindIndex<T extends any[], E, A extends any[] =[]> = T extends [infer L, ...infer R] ?(
        Equal<L, E> extends true ? A["length"] : FindIndex<R, E, [...A, 1]>
) : never

// export type FindIndex<T, K> = T extends [...infer left, infer last] ? 
//         Equal<K , last> extends true ? 
//             left["length"]: FindIndex<left, K> : never

