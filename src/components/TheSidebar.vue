<template>
  <div class="sidebar" v-if="sidebar">
    <span class="sidebar-close" @click="close">&times;</span>
    <div class="sidebar-content">
      <p>Добро пожаловать в систему учёта заявок</p>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup() {
    const store = useStore()
    const sidebar = computed( () => store.state.sidebar)

    return {
      sidebar,
      close: () => store.commit('closeSidebar')
    }
  }
}
</script>

<style scoped>

</style>