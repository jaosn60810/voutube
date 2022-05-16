<template>
  <v-app dark>
    <v-main>
      <Navbar />

      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },
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
