<script setup lang="ts">
import { usePetStore } from '~/stores/petStore.ts';

const petStore = usePetStore();
const statuses = ref(Object.values(petStore.getStatus));
</script>

<template>
  <div>
    <select>
      <option v-for="status in statuses" :key="status">
        {{ status }}
      </option>
    </select>
  </div>
</template>

<style scoped>

</style>
