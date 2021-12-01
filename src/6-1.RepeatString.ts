//复制字符T为字符串类型，长度为C
export default {};

type A = RepeatString<"a", 3>; // 'aaa'
type B = RepeatString<"a", 0>; // ''

type RepeatString<T extends string, K, A extends any[]=[], Prev extends string = ''> =
     K extends A["length"] ? Prev: RepeatString<T, K, [...A, null], `${Prev}${T}`>


