import { mount } from '@vue/test-utils'
import RestaurantList from '../components/restaurant-list/RestaurantList'

describe( 'RestaurantList', () => {
  test( 'does it mount', () => {
    const wrapper = mount( RestaurantList )
    expect( wrapper.vm ).toBeTruthy()
  } )
} )