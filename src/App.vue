<template>
  <keep-alive>
    <component :is="LayoutComp">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'" mode="out-in">
          <keep-alive :include="pageStore.keepAliveList" exclude="['Godemo2']">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </component>
  </keep-alive>
</template>

<script setup>
import usePage from './store/usePage';
import LayoutComps from './Layout/index';

const pageStore = usePage();

const LayoutComp = computed(() => LayoutComps[pageStore.layout] ?? 'div');

</script>
