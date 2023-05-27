<script lang="ts" setup></script>
<template>
  <div>
    <LayoutPageHeader />
    <LayoutPageContent>
      <slot />
    </LayoutPageContent>
    <LayoutPageFooter class="px-[12px] sm:px-[24px]" />
  </div>
</template>

<style>
.my-container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
