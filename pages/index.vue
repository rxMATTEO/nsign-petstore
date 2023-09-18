<script setup lang="ts">

import StatusSelect from '~/components/StatusSelect.vue';

function log (a) {
  console.log(a);
}
</script>

<template>
  <div>
    <StatusSelect @change="log" />
  </div>
</template>

<style scoped>

</style>
