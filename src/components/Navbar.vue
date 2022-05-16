<template>
  <div>
    <v-app-bar dense dark color="primary" fixed flat height="56">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-btn text
        ><img
          src="../assets/YouTube-White-Full-Color-Logo.wine.svg"
          alt="voutuve"
          width="160"
      /></v-btn>

      <v-spacer></v-spacer>

      <Searchbar></Searchbar>

      <v-spacer></v-spacer>

      <v-btn icon class="mx-1">
        <v-icon>mdi-view-grid</v-icon>
      </v-btn>

      <v-btn icon class="mx-1">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon class="mx-1">
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon class="mx-1">
        <v-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import Searchbar from '@/components/Searchbar.vue'

export default {
  data: () => ({}),
  components: {
    Searchbar,
  },
}
</script>
