/**
 *
 * These functions are responsible for fetching
 * the data from the api.
 *
 */
import axios from 'axios'

export default async function getRestaurants() {
  // TODO: Add error handling
  // try {
  const response = await axios(
    'https://data.cityofchicago.org/resource/cwig-ma7x.json',
    {
      method: 'get',
      params: {
        $limit: '10',
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        console.log(response.data)
        return response.data
      }
    })
    .then((response) => {
      this.result = response.body
    })
    .catch((err) => {
      alert(err)
    })
  return response
}
