<template>
  <v-navigation-drawer
    :temporary="videoIsPlaying"
    :mini-variant.sync="showFullDrawer"
    class="scroller"
    dark
    clipped
    app
    width="240"
    color="primary"
    v-model="showDrawer"
    mini-variant-width="72"
  >
    <v-list :dense="!showFullDrawer" class="scroller test">
      <div class="youtube-brand-header" v-if="videoIsPlaying">
        <v-list-item link class="px-5-5">
          <v-list-item-icon><v-icon>mdi-menu</v-icon></v-list-item-icon>
          <v-list-item-content>
            <img
              src="../assets/YouTube-White-Full-Color-Logo.wine.svg"
              alt="YouTube"
              width="10"
            />
          </v-list-item-content>
        </v-list-item>
      </div>

      <div class="pb-3">
        <v-list-item link class="px-5-5" to="/">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link class="px-5-5" to="Trending">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-fire</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Trending</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link class="px-5-5" to="Subscriptions">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-youtube-subscription</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Subscriptions</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-divider v-if="!showFullDrawer" />

      <div class="py-3">
        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-play-box-multiple</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Library</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-history</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>History</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-play-box-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Your videos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-clock</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Watch videos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-thumb-up</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Liked videos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-divider v-if="!showFullDrawer" />

      <div class="py-3">
        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">REE</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>xQxOW</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-plus-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Browse Channels</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider v-if="!showFullDrawer"></v-divider>

      <div class="py-3">
        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-youtube</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Voutube Premium</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-filmstrip</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Voutube Movies</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-youtube-gaming</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Gaming</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-access-point</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Live</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-hanger</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Fashion $ beauty</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider v-if="!showFullDrawer"></v-divider>

      <div class="py-3">
        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-flag</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Report history</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-help-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-if="!showFullDrawer" class="px-5-5">
          <v-list-item-icon>
            <v-icon dark color="subtitle">mdi-message-alert</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Send feedback</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({}),
  computed: {
    ...mapState({
      videoIsPlaying: state => state.youtube.videoIsPlaying,
      showFullDrawer: state => state.youtube.showFullDrawer,
    }),

    showDrawer: {
      get() {
        return this.$store.state.youtube.showDrawer
      },
      set(value) {
        this.$store.commit('toggleShowDrawer', value)
      },
    },
    showFullDrawer: {
      get() {
        return this.$store.state.youtube.showFullDrawer
      },
      set(value) {
        this.$store.commit('toggleShowFullDrawer', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
