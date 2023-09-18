<script setup lang="ts">
import {Ref, ref} from 'vue';
import { usePetStore } from '~/stores/petStore.ts';
import {Pet} from "~/types/Pet/pet";
import Error from "~/error.vue";

const { params: { id } } = useRoute();

const petStore = usePetStore();
const pet = await petStore.fetchPetById(id);
console.log(pet)

const sameCategoryPets = await petStore.fetchPetByStatus(pet.status);

const clickedItem: Ref<Pet> = ref(null);
</script>

<template>
  <div v-if="pet.id">
    <div class="flex gap-5 justify-center items-center">
      <span class="text-3xl font-bold">Имя животного: </span>
      <span class="align-middle">{{ pet.name }}</span>
      <div class="absolute right-0 w-1/2 top-0">
        <ItemsModal :quantity="10" :items="sameCategoryPets" @item-click="(item: Pet) => clickedItem = item"  />
      </div>
    </div>
  </div>
  <div v-else>
    <error />
  </div>
</template>

<style scoped>

</style>
