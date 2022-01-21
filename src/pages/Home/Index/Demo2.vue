<template>
  <div class="flex justify-between items-center flex-col w-32 h-64 m-auto pt-24">
    <div class="text-lg font-bold">demo 2</div>
    <div class="text-gray-500">don't keep alive</div>
    <Btn @click="count++">count:{{ count }}</Btn>

    <Btn @click="$router.back">back Home</Btn>
  </div>
</template>

<script setup>
import Btn from '@/components/Btn.vue';

const count = ref(0);

</script>