<script setup lang="ts">
import { ref } from 'vue';
import { usePetStore } from '~/stores/petStore.ts';

const petStore = usePetStore();
const statuses = ref(Object.values(petStore.getStatus));

const emits = defineEmits(['change']);
const selected = ref(statuses.value[0]);
emits('change', selected.value);
</script>

<template>
  <select v-model="selected" @change="emits('change', selected)">
    <option v-for="(status) in statuses" :key="status as string">
      {{ status }}
    </option>
  </select>
</template>

<style scoped>

</style>
