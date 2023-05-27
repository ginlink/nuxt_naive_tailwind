<script lang="ts" setup>
import {
  NConfigProvider,
  NDialogProvider,
  NEl,
  NGlobalStyle,
  NMessageProvider,
  zhCN,
  dateZhCN,
  NBackTop,
} from 'naive-ui'
import { light } from './theme'
import { StateKeys } from './enums/stateEnum'

// Initialization language
AppSetup()

const targetEl = ref<HTMLDivElement | undefined>(undefined)

const locale = useState<string>(StateKeys.locale)

const naiveUILocale = computed(() => {
  switch (locale.value) {
    case 'en':
      return null
    case 'zh':
      return zhCN

    default:
      break
  }
})
const naiveUIdateLocale = computed(() => {
  switch (locale.value) {
    case 'en':
      return null
    case 'zh':
      return dateZhCN

    default:
      break
  }
})
</script>

<template>
  <Html :lang="'en'">
    <NConfigProvider
      :theme="null"
      :theme-overrides="light"
      :locale="naiveUILocale"
      :date-locale="naiveUIdateLocale"
    >
      <!-- NEl let naive's css variables work -->
      <NEl tag="div">
        <div ref="targetEl">
          <NMessageProvider :to="targetEl">
            <NDialogProvider>
              <!-- 提供一些环境 -->
              <NContentProvider>
                <NGlobalStyle />
                <NuxtLayout>
                  <NuxtPage />
                  <NBackTop :right="100" />
                </NuxtLayout>
              </NContentProvider>
            </NDialogProvider>
          </NMessageProvider>
        </div>
      </NEl>
    </NConfigProvider>
  </Html>
</template>
