// 获取对象类型中的可选属性的联合类型

export default {}

type a1 = OptionalKeys<{ foo: number | undefined, bar?: string, flag: boolean }>        // bar
type a2 = OptionalKeys<{ foo: number, bar?: string }>                                   // bar
type a3 = OptionalKeys<{ foo: number, flag: boolean }>                                  // never
type a4 = OptionalKeys<{ foo?: number, flag?: boolean }>                                // foo|flag
type a5 = OptionalKeys<{}>                                                              // never

export type OptionalKeys<T, K = keyof T> = K extends keyof T ? (Omit<T, K> extends T ? K : never): never