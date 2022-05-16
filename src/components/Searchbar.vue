<template>
  <v-row>
    <v-text-field
      class="input-search"
      solo
      dense
      background-color="primaryDarker"
      placeholder="Search"
      hide-details
    >
    </v-text-field>

    <v-btn dark depressed height="40" class="btn-search">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.btn-search {
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
}

.input-search {
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
}
</style>
