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
        <span>{{ restaurant.inspection_id }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// const axios = require('axios')
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
      const response = await fetch(
        'https://data.cityofchicago.org/resource/cwig-ma7x.json?$limit=10',
        {
          params: {
            $limit: 10,
          },
        }
      )
      const restaurants = await response.json()
      this.restaurants = restaurants
    },
    // async getRestaurants() {
    //   const { response } = await axios.get(
    //     'https://data.cityofchicago.org/resource/cwig-ma7x.json',
    //     {
    //       params: {
    //         $limit: 10,
    //       },
    //     }
    //   )
    //   this.restaurants = response
    // },
  },
}
</script>
