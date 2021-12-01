export default {

}
//计算字符串字面量类型的长度
type A = LengthOfString<'BFE.dev'> // 7
type B = LengthOfString<''> // 0
 
type LengthOfString<T extends string, K extends any[]=[]> = T extends `${infer L}${infer R}` 
    ? LengthOfString<R, [...K, L]>: K["length"]