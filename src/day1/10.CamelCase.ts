export default {}
// 横杠命名转化为驼峰命名

import { SplitString } from './7.SplitString'

type a1 = CamelCase<'handle-open-flag'>         // HandleOpenFlag
type a2 = CamelCase<'open-flag'>                // OpenFlag

type UppercaseFst<T> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : T
type CamelCaseIterator<T, Ret extends string=''> = T extends [infer L, ...infer R] ? 
        ( L extends string ? CamelCaseIterator<R, `${Ret}${UppercaseFst<L>}`> : never ): Ret

export type CamelCase<T> = CamelCaseIterator<SplitString<T, '-'>>
