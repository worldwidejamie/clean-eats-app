<template>
  <div class="restaurant-list__wrapper">
    <ul class="restaurant-list">
      <!-- <li class="restaurant-list__item">
        <h2 class="restaurant-name">Jamie's Place</h2>
        <p>You'll love it here</p>
      </li>
      <li class="restaurant-list__item">
        <h2 class="restaurant-name">Jesse's Joint</h2>
        <p>It's probably better than Jamie's</p>
      </li> -->

      <li v-for="restaurant in restaurants" :key="restaurant.inspection_id">
        <span> {{ toTitleCase(restaurant.aka_name) }} </span>
        <span>{{ restaurant.results }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  data() {
    return {
      restaurants: [],
    }
  },
  beforeMount() {
    this.getRestaurants()
  },
  methods: {
    async getRestaurants() {
      const response = await axios(
        'https://data.cityofchicago.org/resource/cwig-ma7x.json',
        {
          method: 'get',
          params: {
            $limit: '10',
            $q: 'progress',
          },
        }
      )
      this.restaurants = response.data
    },
    // Function found in this thread:
    // https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
    // TODO: How to handle edge cases when an establishment's name isn't returned properly formatted? For example, Progress Bar comes back as PROGRESSBAR. Check the API docs for potential solutions?
    toTitleCase(str) {
      let upper = true
      let newStr = ''
      for (let i = 0, l = str.length; i < l; i++) {
        if (str[i] === ' ') {
          upper = true
          newStr += ' '
          continue
        }
        newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase()
        upper = false
      }
      return newStr
    },
  },
}
</script>

<style>
* span {
  color: cadetblue;
}
</style>
