// Imports
import getRestaurants from '../middleware/data'

// Our Restaurant Store
export const state = () => ({
  restaurant: [
    {
      inspectionId: {
        type: Number,
        required: true,
      },
      dbaName: {
        type: String,
        required: true,
      },
      akaName: {
        type: String,
        required: true,
      },
      license: {
        type: Number,
        required: true,
      },
      facilityType: {
        type: String,
        required: true,
      },
      risk: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zip: {
        type: Number,
        required: true,
      },
      inspectionDate: {
        type: Date,
        required: true,
      },
      inspectionType: {
        type: String,
        required: true,
      },
      results: {
        type: String,
        required: true,
      },
      violations: {
        type: String,
        required: true,
      },
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
      location: {
        type: Object,
        default: null,
        requried: false,
      },
    },
  ],
})

export const mutations = () => ({
  retreive(state) {
    state.restaurant(getRestaurants())
  },
})
