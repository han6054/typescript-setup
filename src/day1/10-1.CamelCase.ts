
export default {}
// 横杠命名转化为驼峰命名
type a1 = CamelCase<'handle-open-flag'>         // HandleOpenFlag
type a2 = CamelCase<'open-flag'>                // OpenFlag

type FirstDom<T> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}`: never
type CamelCase<T extends string='', Prev extends string=''> = 
        T extends `${infer L}-${infer R1}${infer R2}` ?
            CamelCase<R2, `${Prev}${L}${Uppercase<R1>}`> : FirstDom<`${Prev}${T}`>
