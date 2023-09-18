<script setup lang="ts">
import { usePetStore } from '~/stores/petStore.ts';

const { params: { id } } = useRoute();

const petStore = usePetStore();
const pet = await petStore.fetchPetById(id);

const sameCategoryPets = await petStore.fetchPetByStatus(pet.status);
</script>

<template>
  <div>
    <div class="flex gap-5 justify-center items-center">
      <span class="text-3xl font-bold">Имя животного: </span>
      <span class="align-middle">{{ pet.name }}</span>
      <div class="absolute right-0 w-1/2 top-0">
        <ItemsModal :quantity="10" :items="sameCategoryPets" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
