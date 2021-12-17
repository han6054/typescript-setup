// 判断是否为没有属性的对象类型{}

export default {}


type A = IsEmptyType<string> // false
type B = IsEmptyType<{ a: 3 }> // false
type C = IsEmptyType<{}> // true
type D = IsEmptyType<any> // false
type E = IsEmptyType<object> // false
type F = IsEmptyType<Object> // false
type G = IsEmptyType<unknown> // false

type IsEmptyType<T> =  T extends Object ? 
                            keyof T extends never ? 
                                string extends T ? true: false: false: false 