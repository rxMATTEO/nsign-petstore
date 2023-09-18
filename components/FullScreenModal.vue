<script setup lang="ts">
type FullScreenModalProps = {
  isVisible: boolean;
}
defineProps<FullScreenModalProps>();
</script>

<template>
  <div v-if="isVisible">
  <div class="fixed bottom-0 left-0 right-0 top-0 bg-black opacity-50 z-1">
  </div>
    <div class="flex justify-center items-center z-1 bg-white z-10 absolute top-1/2 bottom-1/2 h-40 right-0 left-0">
      <slot name="default" />
    </div>
  </div>
</template>

<style scoped>

</style>