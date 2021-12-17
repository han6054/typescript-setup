// 判断是否为never类型
export default {}
type A = IsNever<never> // true
type B = IsNever<string> // false
type C = IsNever<undefined> // false
type D = IsNever<any> // false

// type IsNever<T> = T extends never ? true: false
type IsNever<T> = [T] extends [never] ? true: false
