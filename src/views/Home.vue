<template>
  <div class="home">
    <Chips></Chips>
    <Thumbnail />
  </div>
</template>

<script>
// @ is an alias to /src
import Chips from '@/components/Chips.vue'

import Thumbnail from '@/components/Thumbnail.vue'

export default {
  name: 'Home',
  components: { Chips, Thumbnail },
}
</script>
