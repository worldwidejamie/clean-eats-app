<template>
  <v-container class="restaurant-list__wrapper">
    <p>Update State</p>
    <v-btn @click="addData">Add Data</v-btn>
    <p>Fill Restaurants</p>
    <v-btn @click="fillRestaurants">Fill Restaurants</v-btn>
    <p>Your restaurants today are: <br />{{ restaurants }}</p>
  </v-container>
</template>

<script>
// Imports
// import axios from 'axios'
// import getRestaurants from '../../middleware/data'
// import { mapState } from 'vuex'
// import { mapActions } from 'vuex'
// import { state } from '../../store/index'
// import getRestaurants from '../../middleware/data'

// Vue Export
export default {
  data() {
    return {
      resultTabs: ['pass', 'fail'],
      tabs: null,
      restaurants: [],
      // restaurant: [
      //   {
      //     pass: [{ result: 'pass', rests: [] }],
      //   },
      //   {
      //     fail: [{ result: 'fail', rests: [] }],
      //   },
      //   {
      //     passCondition: [{ result: 'passCondition', rests: [] }],
      //   },
      // ],
    }
  },
  methods: {
    addData() {
      this.$store.commit('restaurants/addData')
    },
    fillRestaurants() {
      this.restaurants = this.$store.state.restaurants.restaurants
    },
  },

  // TODO: Setup filter plan: Create new arrays of fail & pass/pass with conditions. Create separate tabs. Fail items are a no go. Pass are a green light. With conditions is a warning.
}
</script>
