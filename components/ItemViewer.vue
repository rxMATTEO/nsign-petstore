<script setup lang="ts">
import { computed } from 'vue';
import { Pet } from '~/types/Pet/pet';

type ItemViewerProps = {
  quantity: number,
  items: Pet[],
  navigateOnClick?: boolean,
  onClick?: (item: Pet) => void
}
const props = defineProps<ItemViewerProps>();

const slicedByQuantityItems = computed(() => {
  return props.items.slice(0, props.quantity);
});
</script>

<template>
  <div>
    <div class="flex gap-5 justify-center flex-wrap">
      <div
        v-for="item in slicedByQuantityItems"
        class="bg-blue-400 p-5 rounded-xl cursor-pointer"
      >
        <NuxtLink v-if="navigateOnClick" :to="'/pet/' + item.id">
          <div>
            <span>Имя животного: </span>
            <div>
              {{ item.name }}
            </div>
          </div>
        </NuxtLink>
        <div v-else @click="onClick(item)">
          <div>
            <span>Имя животного: </span>
            <div>
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
