import { createContext } from "react";

/**
 * get service inject token
 *
 * @export
 * @template T
 * @param {(...args: any[]) => T} func
 * @param {(T | undefined)} [initialValue=undefined]
 * @returns
 */
export default function getServiceToken<T>(
  func: (...args: any[]) => T,
  initialValue: T | undefined = undefined
) {
  return createContext(initialValue as T);
}
