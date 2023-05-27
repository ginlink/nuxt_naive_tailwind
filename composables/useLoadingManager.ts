import { reactive } from 'vue'
import type { AnyObject } from '@/types/global'

/**
 * loading manager, unified management of loading
 * @param origin
 * @returns
 */
export function useLoadingManager<T extends AnyObject>(origin: T) {
  const loadingManager = reactive<T>(origin)

  return {
    loadingManager,
  }
}
