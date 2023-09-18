<script setup lang="ts">

import { Ref } from 'vue';
import StatusSelect from '~/components/StatusSelect.vue';
import { Pet, Status } from '~/types/Pet/pet.d.ts';
import { usePetStore } from '~/stores/petStore.ts';

const petStore = usePetStore();
const pets: Ref<Pet[]> = ref([]);
async function updatePets (status: Status) {
  pets.value = await petStore.fetchPetByStatus(status);
}
</script>

<template>
  <div>
    <StatusSelect @change="updatePets" />
    <div class="mt-10">
      <ItemViewer :items="pets" :quantity="5" />
    </div>
  </div>
</template>

<style scoped>

</style>
