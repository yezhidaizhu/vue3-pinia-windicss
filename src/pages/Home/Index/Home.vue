<template>
  <div class="flex justify-between items-center flex-col w-80 h-52 m-auto pt-24">
    <div class="text-lg font-bold">Home</div>
    <Btn text="Demo1 page" @click="$router.push('/demo1')" />
    <Btn text="Demo2 page" @click="$router.push('/demo2')" />
  </div>
</template>

<script setup>
import Btn from '@/components/Btn.vue';

</script>

