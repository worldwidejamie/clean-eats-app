<template>
  <v-container class="restaurant-list__wrapper">
    <v-tabs v-model="tabs">
      <v-tab v-for="resultTab in resultTabs" :key="resultTab">
        {{ resultTab }}
      </v-tab>
    </v-tabs>
    <v-row class="d-flex flex-column">
      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card
            v-for="passRestaurant in restaurants[0].passRest"
            :key="passRestaurant.inspection_id"
            class="restaurant-list__item mt-5"
            :class="passRestaurant.results"
          >
            <v-card-title class="restaurant-list__item__title">
              {{ toTitleCase(passRestaurant.aka_name) }}
            </v-card-title>
            <v-card-subtitle class="restaurant-list__item__result">{{
              passRestaurant.results
            }}</v-card-subtitle>
            <v-card-actions>
              <v-btn text color="orange"> But Why?</v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div>
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
        </v-tab-item>

        <v-tab-item>
          <v-card
            v-for="failRestaurant in restaurants[1].failRest"
            :key="failRestaurant.inspection_id"
            class="restaurant-list__item mt-5"
            :class="failRestaurant.results"
          >
            <v-card-title class="restaurant-list__item__title">
              {{ toTitleCase(failRestaurant.aka_name) }}
            </v-card-title>
            <v-card-subtitle class="restaurant-list__item__result">{{
              failRestaurant.results
            }}</v-card-subtitle>
            <v-card-actions>
              <v-btn text color="orange"> But Why?</v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div>
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
        </v-tab-item>
      </v-tabs-items>
    </v-row>
  </v-container>
</template>

<script>
// Imports
// import axios from 'axios'
import getRestaurants from '../../middleware/data'

// Vue Export
export default {
  data() {
    return {
      resultTabs: ['pass', 'fail'],
      tabs: null,
      restaurants: [
        {
          pass: [{ tab: 'pass', passRest: [] }],
        },
        {
          fail: [{ tab: 'fail', failRest: [] }],
        },
      ],
    }
  },
  beforeMount() {
    this.returnList()
  },
  mounted() {},
  methods: {
    async returnList() {
      const restaurantResponse = await getRestaurants()
      console.log(restaurantResponse.data)
      // Pass Restaurants array
      // const pass = restaurantResponse.filter(
      //   (restaurant) =>
      //     restaurant.results === 'Pass' ||
      //     restaurant.results === 'Pass w/ Conditions'
      // )
      // this.restaurants[0].passRest = pass

      // // Fail Restaurant Array
      // const fail = restaurantResponse.filter(
      //   (restaurant) => restaurant.results === 'Fail'
      // )

      // this.restaurants[1].failRest = fail
    },
    // Separate response into pass/fail arrays

    // },
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
