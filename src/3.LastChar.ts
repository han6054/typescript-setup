export default {};
//获取字符串字面量中的最后一个字符
type A = LastChar<"BFE">; // 'E'
type B = LastChar<"dev">; // 'v'
type C = LastChar<"">; // never

type LastChar<T, Prev = never> = T extends `${infer L}${infer R}`
  ? LastChar<R, L>
  : Prev;
