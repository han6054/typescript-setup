// type A = FirstChar<"BFE">; // 'B'
// type B = FirstChar<"dev">; // 'd'
// type C = FirstChar<"">; // never

// type FirstChar<T> = T extends `${infer L}${infer R}` ? L : never;
