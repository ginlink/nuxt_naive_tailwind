<template>
  <p
    class="li-item"
    :style="{
      '--li-width': width,
      '--li-height': height,
      '--li-color': color,
      'padding-left': `calc(${space} + ${width})`,
    }"
  >
    <slot />
  </p>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    width?: string
    height?: string
    space?: string
    color?: string
  }>(),
  {
    width: '4px',
    height: '4px',
    space: '12px',
    color: 'var(--inverted-color)',
  }
)
</script>
<style lang="scss" scoped>
.li-item {
  position: relative;

  &::before {
    z-index: auto;
    content: '';
    background-color: var(--li-color);
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    width: var(--li-width);
    height: var(--li-height);
    border-radius: 50%;
    pointer-events: none;
  }
}
</style>
