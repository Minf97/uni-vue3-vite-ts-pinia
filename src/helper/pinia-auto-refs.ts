// "https://github.com/Allen-1998/pinia-auto-refs"
/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
import type { AutoToRefs, ToRef } from 'vue'

import appStore from '@/store/app'
import resultStore from '@/store/result'
import setupStore from '@/store/setup'
import testStore from '@/store/test'
import userStore from '@/store/user'

declare module 'vue' {
  export type AutoToRefs<T> = {
    [K in keyof T]: T[K] extends Function ? T[K] : ToRef<T[K]>
  }
}

const storeExports = {
  app: appStore,
  result: resultStore,
  setup: setupStore,
  test: testStore,
  user: userStore,
}

export function useStore<T extends keyof typeof storeExports>(storeName: T) {
  const store = storeExports[storeName]()
  const storeRefs = storeToRefs(store)
  return { ...store, ...storeRefs } as unknown as AutoToRefs<ReturnType<typeof storeExports[T]>>
}
