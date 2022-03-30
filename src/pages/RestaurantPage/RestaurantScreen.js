import React,{useContext} from 'react'
import { addItems, removeItems } from '../../Redux/Action/cartAction'
import { connect } from 'react-redux'
import Header from '../../organisms/Header/Header'
import RestaurantDetails from '../RestaurantPage/components/RestaurantDetails/RestaurantDetails'
import Menu from '../RestaurantPage/components/Menu/Menu'
import {CartContext} from './CartContext/Context'


  function RestaurantScreen({cartItems,addItems,removeItems}) {

    const ContextDetails=useContext(CartContext)
  
    const restaurant={
      name:ContextDetails.name,
      data:ContextDetails.data,
      OfferData:ContextDetails.OfferData,
      TitleData:ContextDetails.TitleData,
      Headerdata:ContextDetails.Headerdata,
      food:ContextDetails.food,
      cartItems:cartItems,
      onAdd:addItems,
      onRemove:removeItems
    }

  return (
    <div>
      <Header Headerdata={restaurant.Headerdata}/>
        <RestaurantDetails OfferData={restaurant.OfferData} TitleData={restaurant.TitleData} foodimg={restaurant.food}/>
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