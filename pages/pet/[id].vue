<script setup lang="ts">
import { usePetStore } from '~/stores/petStore.ts';

const { params: { id } } = useRoute();

const petStore = usePetStore();
const pet = await petStore.fetchPetById(id);
</script>

<template>
  <div v-if="pet.id">
    <div class="flex gap-5 justify-center">
      {{ pet.name }}
    </div>
  </div>
</template>

<style scoped>

</style>
