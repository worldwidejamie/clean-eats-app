<template>
  <v-row dense class="restaurant-list__wrapper">
    <v-col cols="12" class="restaurant-list d-flex flex-column">
      <v-item-group>
        <v-item
          v-for="passRestaurant in passRestaurants"
          v-slot="{ active, toggle }"
          :key="passRestaurant.inspection_id"
        >
          <v-card
            class="restaurant-list__item mt-5"
            :class="getResultsClass(passRestaurants.results)"
          >
            <v-card-title class="restaurant-list__item__title">
              {{ toTitleCase(passRestaurant.aka_name) }}
            </v-card-title>
            <v-card-subtitle class="restaurant-list__item__result">{{
              passRestaurant.results
            }}</v-card-subtitle>
            <v-card-actions>
              <v-btn text color="orange" @click="toggle"> But Why?</v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="active">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-item>
      </v-item-group>
    </v-col>
  </v-row>
</template>

<script>
const axios = require('axios')
export default {
  data() {
    return {
      // restaurants: [],
      passRestaurants: [],
      failRestaurants: [],
    }
  },
  beforeMount() {
    this.getRestaurants()
  },
  methods: {
    async getRestaurants() {
      // TODO: Add error handling
      const response = await axios(
        'https://data.cityofchicago.org/resource/cwig-ma7x.json',
        {
          method: 'get',
          params: {
            $limit: '75',
          },
        }
      )

      // Separate response into pass/fail arrays

      // this.restaurants = response.data
      const restaurantResponse = response.data
      // const failRestaurants

      // Pass Restaurants array
      const pass = restaurantResponse.filter(
        (restaurant) =>
          restaurant.results === 'Pass' ||
          restaurant.results === 'Pass w/ Conditions'
      )

      this.passRestaurants = pass

      // Fail Restaurant Array
      const fail = restaurantResponse.filter(
        (restaurant) => restaurant.results === 'Fail'
      )
      this.failRestaurants = fail
    },
    // Return a class in response to inspection results

    getResultsClass(response) {
      let resultClass
      switch (response) {
        case 'Pass':
          resultClass = 'pass'
          break
        case 'Pass w/ Conditions':
          resultClass = 'pass-conditional'
          break
        case 'Fail':
          resultClass = 'fail'
          break
        default:
          return ''
      }
      return resultClass
    },
    // Function found in this thread:
    // https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
    // TODO: How to handle edge cases when an establishment's name isn't returned properly formatted? For example, Progress Bar comes back as PROGRESSBAR. Check the API docs for potential solutions?
    toTitleCase(str) {
      if (!str) {
        return
      }
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

    // TODO: Setup filter plan: Create new arrays of fail & pass/pass with conditions. Create separate tabs. Fail items are a no go. Pass are a green light. With conditions is a warning.
  },
}
</script>
