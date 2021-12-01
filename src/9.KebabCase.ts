//驼峰命名转横杠命名
export default {}

type a1 = KebabCase<'HandleOpenFlag'>           // handle-open-flag
type a2 = KebabCase<'OpenFlag'>                 // open-flag

type RemoveFirst<T> = T extends `-${infer L}` ? L : T
type KebabCase<T, Prev extends string=''> = T extends `${infer L}${infer R}` ? KebabCase<R, `${Prev}${
    (L extends Uppercase<L> ? `-${Lowercase<L>}`: L)
}`>: RemoveFirst<Prev>
