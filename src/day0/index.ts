
export default {}

function getUser(a: number, b: number) {
  return { name: 'zf', age: 10 }
}

type ReturnType<T> = T extends (...args: any) => infer R ? R : never
type MyReturn = ReturnType<typeof getUser>

type Parameters<T> = T extends (...args: infer R) => any ? R : any;
type MyParams = Parameters<typeof getUser>;

type ElementOf<T> = T extends Array<infer E> ? E : never;
type TupleToUnion = ElementOf<[string, number, boolean]>;

type T1 = { name: string };
type T2 = { age: number };
type ToIntersection<T> = T extends ([(x: infer U) => any, (x: infer U) => any]) ? U : never;
type t3 = ToIntersection<[(x:T1)=>any,(x:T2)=>any]>