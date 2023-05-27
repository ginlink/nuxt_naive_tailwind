<template>
  <slot />
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'

onBeforeMount(() => {
  if (window) {
    // 让外部支持使用message
    window.$message = useMessage()
  }
})
</script>
