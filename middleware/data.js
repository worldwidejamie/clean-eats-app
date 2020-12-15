/**
 *
 * These functions are responsible for fetching
 * the data from the api.
 *
 */
import axios from 'axios'

export default function getRestaurants() {
  // TODO: Add error handling
  try {
    const response = axios(
      'https://data.cityofchicago.org/resource/cwig-ma7x.json',
      {
        method: 'get',
        params: {
          $limit: '10',
        },
      }
    )
    return response
  } catch (e) {
    console.alert(`HTTP error! status: ${e.status}`)
  }
}
