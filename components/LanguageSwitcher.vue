<script lang="ts" setup>
import { NPopselect, NButton, NSpace } from 'naive-ui'
import { StateKeys } from '~/enums/stateEnum'
import { availableLocales } from '~/constants/index'

const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

// state
const localeSetting = useState<string>(StateKeys.locale)
const langOptions = Object.values(availableLocales).map((i) => ({
  label: i.name,
  value: i.iso,
}))

watch(localeSetting, () => {
  updateLanguageRoute()
})

function updateLanguageRoute(code?: string) {
  if (/dashboard/.test(route.fullPath)) {
    // dashboard仅内存加载国际化
    return
  }

  navigateTo({
    path: switchLocalePath(code ?? localeSetting.value),
  })
}
</script>

<template>
  <div class="min-w-[80px] flex">
    <NPopselect
      v-model:value="localeSetting"
      trigger="click"
      :options="langOptions"
    >
      <div class="flex">
        <NButton class="text-base-color" text>
          <NSpace :align="'center'">
            <div class="flex">
              <Icon
                :size="'20'"
                :name="'iconoir:language'"
                :color="theme.baseColor"
              />
            </div>
            <div>{{ availableLocales[localeSetting].name }}</div>
          </NSpace>
        </NButton>
      </div>
    </NPopselect>
  </div>
</template>
