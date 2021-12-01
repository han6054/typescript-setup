
//复制字符T为字符串类型，长度为C
export default {};

type A = RepeatString<"a", 3>; // 'aaa'
type B = RepeatString<"a", 0>; // ''

type AA = TupleToString<["a", "b", "c"]>; // 'abc'

type TupleToString<T, Prev extends string = ""> = T extends [ infer L, ...infer R ] ? ( L extends string ? TupleToString<R, `${Prev}${L}`> : never ): Prev;

type Repeat<StringTuple extends string[], Len extends number, Char extends string> = StringTuple["length"] extends Len ? TupleToString<StringTuple> : Repeat<[...StringTuple, Char], Len, Char>;

type RepeatString<Str, Len extends number> = Len extends 0 ? "" : (Str extends `${infer S}` ? Repeat<[Str], Len, Str> : never);
