import cloneDeep from 'lodash/cloneDeep'
import { reactive, ref, watch } from 'vue'
import type { AnyObject } from '@/types/global'

/**
 * show Steward who manages show and integrates currentRow
 * @param origin
 * @returns
 */
export function useShowManager<
  T extends AnyObject,
  U extends AnyObject = AnyObject
>(origin: T) {
  const showManager = reactive<T>(origin)
  const currentRow = ref<U>({} as any)

  Object.keys(origin).forEach((key) => {
    watch(
      () => showManager[key],
      (val) => {
        if (!val) {
          // @ts-ignore
          currentRow.value = {}
        }
      }
    )
  })

  function handleShow(key: keyof T, record?: U) {
    ;(showManager as AnyObject)[key as string] = true

    if (record) {
      // @ts-ignore
      currentRow.value = cloneDeep(record)
    }
  }
  function handleClose(key: keyof T) {
    ;(showManager as AnyObject)[key as string] = false
    // @ts-ignore
    currentRow.value = {}
  }

  return {
    showManager,
    currentRow,
    handleShow,
    handleClose,
  }
}
