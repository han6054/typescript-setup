// 将字符串类型的元素转换为字符串字面量类型
export default {};
type A = TupleToString<["a", "b", "c"]>; // 'abc'
type B = TupleToString<[]>; // ''
type C = TupleToString<["a"]>; // 'a'

type TupleToString<T, Prev extends string = ""> = T extends [
  infer L,
  ...infer R
]
  ? L extends string
    ? TupleToString<R, `${Prev}${L}`>
    : never
  : Prev;
