<script setup lang="ts">
import { ref } from 'vue';
import { Pet } from '~/types/Pet/pet';

type ItemsModalProps = {
  items: Pet[],
  quantity: number,
};
defineProps<ItemsModalProps>();

const isModalVisible = ref(false);

const emits = defineEmits(['itemClick']);
</script>

<template>
  <button class="bg-blue-300 p-3 rounded-xl right-0 absolute" @click="isModalVisible = !isModalVisible">Открыть похожие</button>
  <div class="absolute right-52">
  <div class="relative" v-if="isModalVisible">
    <ItemViewer :quantity="quantity" :items="items" :on-click="(item: Pet) => emits('itemClick', item)" />
  </div>
  </div>

</template>

<style scoped>

</style>
