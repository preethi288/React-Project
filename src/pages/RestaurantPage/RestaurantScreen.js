import React from 'react'
import Header from '../../organisms/Header/Header'
import RestaurantDetails from '../RestaurantPage/components/RestaurantDetails/RestaurantDetails'
import Menu from '../RestaurantPage/components/Menu/Menu'

function RestaurantScreen() {
  return (
    <div>
        <Header/>
        <RestaurantDetails/>
        <Menu/>
        
    </div>
  )
}

export default RestaurantScreen