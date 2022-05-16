<template>
  <div>
    <v-app-bar
      dense
      dark
      color="primary"
      fixed
      flat
      height="56"
      clipped-left
      app
    >
      <v-app-bar-nav-icon @click="onClick"></v-app-bar-nav-icon>

      <v-btn text
        ><img
          src="../assets/YouTube-White-Full-Color-Logo.wine.svg"
          alt="voutuve"
          width="160"
      /></v-btn>

      <v-btn color="success" @click="play"
        >isPlaying:{{ videoIsPlaying }}</v-btn
      >
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
    <Sidebar />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Searchbar from '@/components/Searchbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  data: () => ({}),
  components: {
    Searchbar,
    Sidebar,
  },
  computed: {
    ...mapState({
      showMiniDrawer: state => state.youtube.showMiniDrawer,
      showDrawer: state => state.youtube.showDrawer,
      videoIsPlaying: state => state.youtube.videoIsPlaying,
    }),
  },
  methods: {
    onClick() {
      if (this.videoIsPlaying) {
        this.$store.commit('toggleShowDrawer', !this.showDrawer)
      } else {
        this.$store.commit('toggleShowMiniDrawer', !this.showMiniDrawer)
      }
    },
    play() {
      this.$store.commit('toggleVideoIsPlaying', !this.videoIsPlaying)
      if (this.videoIsPlaying) {
        this.$store.commit('toggleShowDrawer', false)
        this.$store.commit('toggleShowMiniDrawer', false)
      } else {
        this.$store.commit('toggleShowDrawer', true)
        this.$store.commit('toggleShowMiniDrawer', true)
      }
    },
  },
}
</script>
