<script setup lang="ts">
import { computed } from 'vue';
import { Pet } from '~/types/Pet/pet';

type ItemViewerProps = {
  quantity: number,
  items: Pet[],
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
        <NuxtLink :to="'/pet/' + item.id">
          <div>
            <span>Имя животного: </span>
            <div>
              {{ item.name }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
