// 1、LengthO
export default {}
type A = LengthOfTuple<['B', 'F', 'E']> // 3
type B = LengthOfTuple<[]> // 0

type LengthOfTuple<T extends any[]> = T["length"]