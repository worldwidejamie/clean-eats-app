<template>
  <div class="search__wrapper">
    <div class="search__field">
      <input
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        placeholder="Find Clean Eatin'"
      />
    </div>
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
* {
  color: black;
}

.search-field {
  margin: 32px 0;
}

.search-field > input {
  width: 50%;
  padding: 5px 0;
}
</style>
