// 保留元组类型T中的A类型
export default {}

type A = Filter<[1,'BFE', 2, true, 'dev'], number> // [1, 2]
type B = Filter<[1,'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
type C = Filter<[1,'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']

type Filter<T extends any[], K, Prev extends any[] = []> = 
        T extends [infer L, ...infer R] ? 
            Filter<R, K, ([L] extends [K] ? [...Prev, L]: Prev)> : Prev