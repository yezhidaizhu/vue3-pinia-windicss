<template>
  <button class="btn">
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup lang="ts">

const props = defineProps({
  text: String
});

</script>
<style scoped>
.btn {
  @apply px-4 py-1 text-sm text-purple-600 font-semibold
    rounded-full border border-purple-200 dark:border-purple-800
    hover:text-white hover:bg-purple-600 hover:border-transparent
    focus:outline-none focus:ring-2 ring-purple-600 ring-opacity-40;
}
</style>