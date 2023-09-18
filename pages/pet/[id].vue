<script setup lang="ts">
import { Ref, ref } from 'vue';
import { usePetStore } from '~/stores/petStore.ts';
import { Pet } from '~/types/Pet/pet';
import Error from '~/error.vue';
import { useRememberPetStore } from '~/stores/rememberPetStore.ts';

const { params: { id } } = useRoute();

const petStore = usePetStore();
const pet = await petStore.fetchPetById(id);

const sameCategoryPets = await petStore.fetchPetByStatus(pet.status);

const clickedItem: Ref<Pet> = ref({} as Pet);
const isFullscreenModalVisible = ref(false);

let _rememberPet = '';
const rememberPet = computed({
  get: () => clickedItem.value?.name || '',
  set: (value: string) => { _rememberPet = value; }
});

const rememberPetStore = useRememberPetStore();

function onModalClose () {
  isFullscreenModalVisible.value = false;
  rememberPetStore.setRememberPet(_rememberPet || clickedItem.value.name);
}
</script>

<template>
  <div v-if="pet.id">
    <div class="flex gap-5 justify-center items-center">
      <span class="text-3xl font-bold">Имя животного: </span>
      <span class="align-middle">{{ pet.name }}</span>
      <div class="absolute right-0 w-1/2 top-0">
        <ItemsModal
          :quantity="10"
          :items="sameCategoryPets"
          @item-click="(item: Pet) => {
            clickedItem = item;
            isFullscreenModalVisible = true;
          }"
        />
      </div>
    </div>
    <div>
      <div class="my-5">
        <NuxtLink to="/" class="text-blue-400">
          На главную
        </NuxtLink>
      </div>
      Ранее просмотренное животное: {{ rememberPetStore.getRememberPet }}
    </div>
    <FullScreenModal :is-visible="isFullscreenModalVisible">
      <template #default>
        <div class="flex flex-col">
          <div>
            <span class="mr-5">Имя животного:</span>
            <input v-model="rememberPet" class="border-black border-2" type="text">
          </div>
          <button class="mt-5 bg-blue-400 rounded-xl p-3" @click="onModalClose">
            Запомнить просмотр
          </button>
        </div>
      </template>
    </FullScreenModal>
  </div>
  <div v-else>
    <error />
  </div>
</template>

<style scoped>

</style>
