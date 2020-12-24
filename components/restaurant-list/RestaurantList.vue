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
          <!-- <v-card
            v-for="passing in restaurants[0].rests"
            :key="passing.inspection_id"
            class="restaurant-list__item mt-5"
            :class="passing.results"
          >
            <v-card-title class="restaurant-list__item__title">
              {{ toTitleCase(passing.aka_name) }}
            </v-card-title>
            <v-card-subtitle class="restaurant-list__item__result">{{
              passing.results
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
          </v-card> -->
        </v-tab-item>

        <v-tab-item>
          <!-- <v-card
            v-for="failing in restaurants[1].rests"
            :key="failing.inspection_id"
            class="restaurant-list__item mt-5"
            :class="failing.results"
          >
            <v-card-title class="restaurant-list__item__title">
              {{ toTitleCase(failing.aka_name) }}
            </v-card-title>
            <v-card-subtitle class="restaurant-list__item__result">{{
              failing.results
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
          </v-card> -->
        </v-tab-item>
      </v-tabs-items>
    </v-row>
  </v-container>
</template>

<script>
// Imports
// import axios from 'axios'
// import getRestaurants from '../../middleware/data'
// import { mapMutations } from 'vuex'

// Vue Export
export default {
  data() {
    return {
      resultTabs: ['pass', 'fail'],
      // tabs: null,
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
  computed: {
    restaurant() {
      return this.$store.state.restaurant.restaurant
    },
  },
  beforeMount() {
    this.getRests()
    // this.sortRests()
  },
  methods: {
    getRests(e) {
      this.$store.commit('restaurant/retrieve', e)
      console.log(e)
    },

    // Here we set up the values for the restaruat data
    // returnList() {
    // const restaurantResponse =
    // return getRestaurants()
    // },

    // Sorting the results to
    // Pass/Fail/Pass w/ Conditions
    // async sortRests() {
    //   const restArray = await this.returnList().then((res) => {
    //     return res.data
    //   })

    //   // console.log(this.restaurants[0].pass[0].rests)
    //   // const pass = this.restaurants[0].pass[0]
    //   // const passCondition = this.restaurants
    //   // const fail = this.restaurants
    //   // console.log(`Parse pass: ${pass[1]}`)
    //   // console.log(`Parse passCond: ${passCondition}`)
    //   // console.log(`Rest Array: ${restArray}`)
    //   // console.log(`Parse fail: ${fail}`)
    //   console.log(restArray)
    //   const pass = JSON.parse(JSON.stringify(this.restaurants[0]))
    //   // console.log(JSON.parse(JSON.stringify(this.restaurants[1])))
    //   console.log(pass)
    //   // restArray.forEach((restaurant) => {
    //   // console.log(this.restaurants[0][1])
    //   // console.log(pass)
    //   // })
    //   //   const result = restaurant.results
    //   //   // console.log(restaurant)
    //   //   switch (result) {
    //   //     case 'Pass':
    //   //       pass.rests.push(restaurant)
    //   //       pass.result = restaurant.results
    //   //       // console.log(`Pass in switch is: ${pass}`)
    //   //       break
    //   //     case 'Pass w/ Conditions':
    //   //       passCondition.rests.push(restaurant)
    //   //       passCondition.result = restaurant.results
    //   //       break
    //   //     case 'Fail':
    //   //       // console.log(`fail in switch is: ${fail}`)
    //   //       fail.rests.push(restaurant)
    //   //       fail.result = restaurant.results
    //   //       break
    //   //     default:
    //   //   }
    //   // })
    // },

    // Item Class variable

    // Return a class in response to inspection results

    // getResultsClass(response) {
    //   switch (response) {
    //     case 'Pass':
    //       resultClass = 'pass'
    //       break
    //     case 'Pass w/ Conditions':
    //       resultClass = 'pass-conditional'
    //       break
    //     case 'Fail':
    //       resultClass = 'fail'
    //       break
    //     default:
    //       return ''
    //   }
    //   return resultClass
    // },
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
