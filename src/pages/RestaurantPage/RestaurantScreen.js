import React from 'react'
import { addItems, removeItems } from './Redux/Action/CartAction'
import { connect } from 'react-redux'
import Header from '../../organisms/Header/Header'
import RestaurantDetails from '../RestaurantPage/components/RestaurantDetails/RestaurantDetails'
import Menu from '../RestaurantPage/components/Menu/Menu'
import Headerdata from './services/HeaderData'
import OfferData from './services/OfferData'
import TitleData from './services/TitleData'
import food from '../../Images/food.jpeg'
import data from './services/Itemdata'


  function RestaurantScreen({cartItems,addItems,removeItems}) {
    
    const restaurant={
      name:'Kitchens of Punjab',
      data:data,
      cartItems:cartItems,
      onAdd:addItems,
      onRemove:removeItems
    }

  return (
    <div>
        <Header Headerdata={Headerdata}/>
        <RestaurantDetails OfferData={OfferData} TitleData={TitleData} foodimg={food}/>
        <Menu restaurant={restaurant}/>   
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartreducer.cartItems,
  };
};


export default connect(mapStateToProps,{addItems,removeItems})(RestaurantScreen)