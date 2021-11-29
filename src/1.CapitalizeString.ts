type a1 = CapitalizeString<"handler">; // Handler
type a2 = CapitalizeString<"parent">; // Parent
type a3 = CapitalizeString<233>; // 233

type CapitalizeString<T> = T extends `${infer L}${infer R}`
  ? `${Uppercase<L>}${R}`
  : T;
type A = CapitalizeString<"abcd">;
