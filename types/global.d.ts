import { VueUseNuxtOptions } from '@vueuse/nuxt'
import { ModuleOptions as NuxtWindiCssModuleOptions } from 'nuxt-windicss'
import { ModuleOptions as NuxtContentModuleOptions } from '@nuxt/content'

declare module 'nuxt/config' {
  interface NuxtConfig {
    vueuse?: VueUseNuxtOptions
    windicss?: NuxtWindiCssModuleOptions
    content?: Partial<NuxtContentModuleOptions>
  }
}

declare global {
  interface Window {
    $message: any
  }
}

export type AnyObject = Record<any, any>

export {}
