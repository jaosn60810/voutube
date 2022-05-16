<template>
  <v-app dark>
    <Sidebar></Sidebar>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
  },
  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 10px !important;
}
::-webkit-scrollbar-track {
  background: var(-v-primary-base) !important;
}
::-webkit-scrollbar-thumb {
  background: var(--v-tertiary-base) !important;
  border-radius: 3px !important;
}
</style>
