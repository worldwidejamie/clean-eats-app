<template>
  <div class="restaurant-list__wrapper">
    <ul class="restaurant-list">
      <li
        v-for="restaurant in restaurants"
        :key="restaurant.inspection_id"
        class="restaurant-list__item"
        :class="getResultsClass(restaurant.results)"
      >
        <span class="restaurant-list__item__title">
          {{ toTitleCase(restaurant.aka_name) }}
        </span>
        <span class="restaurant-list__item__result">{{
          restaurant.results
        }}</span>
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
      // console.log(response)
      // if (response === 'Pass') {
      //   console.log('pass')
      //   return 'pass'
      // } else {
      //   console.log('fail')
      // }
      // if (
      //   response !== 'Pass' ||
      //   response !== 'Fail' ||
      //   response !== 'Pass w/ Conditions'
      // ) {
      //   return ''
      // } else {
      //   if (response === 'Pass') {
      //     return 'pass'
      //   }
      //   if (response === 'Fail') {
      //     return 'fail'
      //   }
      //   if (response === 'Pass w/ Conditions') {
      //     return 'exceptions'
      //   }
      // }
      // console.log(response)
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
