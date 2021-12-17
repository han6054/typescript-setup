"use strict";
exports.__esModule = true;
// 找出E类型在元组类型T中的下标
exports["default"] = {};
// export type FindIndex<T, K> = T extends [...infer left, infer last] ? 
//         Equal<K , last> extends true ? 
//             left["length"]: FindIndex<left, K> : never
