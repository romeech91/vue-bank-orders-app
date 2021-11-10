<template>
<!--  <main-layout></main-layout>-->
  <component :is="layout + '-layout'" v-if="layout"></component>
</template>

<script>
import {computed} from "vue";
import {useRoute} from 'vue-router'
import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";
export default {
  setup() {
    const route = useRoute()

    console.log(route.meta);
    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: {MainLayout, AuthLayout}
}
</script>