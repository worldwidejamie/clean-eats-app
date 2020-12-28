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
          <!-- {{ loadRests }} -->

          <!-- {{ isTrue }} -->
          <!-- <span>testData is {{ testData }}</span> -->
          <!-- {{ restaurants }} -->
          <!-- <div v-for="rest in getRests" :key="rest.inspectionId"></div> -->
          <!-- {{ restaurants }} -->
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

  // TODO: Setup filter plan: Create new arrays of fail & pass/pass with conditions. Create separate tabs. Fail items are a no go. Pass are a green light. With conditions is a warning.
}
</script>
