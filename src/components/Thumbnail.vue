<template>
  <v-container>
    <v-row class="mx-5" no-gutters>
      <v-col
        class="px-1"
        cols="3"
        v-for="(video, index) in videos"
        :key="index"
      >
        <v-card max-width="350" color="transparent" outlined>
          <v-img class="white--text align end" :src="video.image"> </v-img>
          <v-card-text class="text--primary">
            <div class="font-weight-bold">
              {{ video.title }}
            </div>

            <div class="text--secondary">
              {{ video.user }}
            </div>

            <div class="text--secondary">{{ video.views }} views</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    videos: [
      {
        image:
          'https://i.ytimg.com/an_webp/dQw4w9WgXcQ/mqdefault_6s.webp?du=3000&sqp=CLTtiZQG&rs=AOn4CLBxrbM1YqVMZ438pfxIe3rESBZOyw',
        title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
        views: 1213289841,
        date: '25/10/2009',
        user: 'Rick Astley',
      },
      {
        image:
          'https://i.ytimg.com/an_webp/dQw4w9WgXcQ/mqdefault_6s.webp?du=3000&sqp=CLTtiZQG&rs=AOn4CLBxrbM1YqVMZ438pfxIe3rESBZOyw',
        title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
        views: 1213289841,
        date: '25/10/2009',
        user: 'Rick Astley',
      },
      {
        image:
          'https://i.ytimg.com/an_webp/dQw4w9WgXcQ/mqdefault_6s.webp?du=3000&sqp=CLTtiZQG&rs=AOn4CLBxrbM1YqVMZ438pfxIe3rESBZOyw',
        title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
        views: 1213289841,
        date: '25/10/2009',
        user: 'Rick Astley',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
