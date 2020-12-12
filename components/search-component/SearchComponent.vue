<template>
  <div class="search__wrapper">
    <v-text-field
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      label="Find Clean Eatin'"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      restaurants: [],
    }
  },
  // watch: {
  //   async searchQuery(searchQuery) {
  //     if (!searchQuery) {
  //       this.restaurants = []
  //     }
  //     this.restaurants = await this.
  //   },
  // },
}
</script>

<style>
.search-field {
  margin: 32px 0;
}

.search-field > input {
  width: 50%;
  padding: 5px 0;
}
</style>
