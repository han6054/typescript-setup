// 获取对象类型中的必须属性的联合类型

export default {}

type a1 = PickRequired<{ foo: number | undefined, bar?: string, flag: boolean }>        // {foo:number|undefined,flag:boolean}
type a2 = PickRequired<{ foo: number, bar?: string }>                                   // {foo:number}
type a3 = PickRequired<{ foo: number, flag: boolean }>                                  // {foo:number,flag:boolean}
type a4 = PickRequired<{ foo?: number, flag?: boolean }>                                // {}
type a5 = PickRequired<{}>                                                              // {}


import { RequiredKeys } from './3.RequiredKeys'

type PickRequired<T> = { [k in RequiredKeys<T>]: k extends keyof T ? T[k]: never}