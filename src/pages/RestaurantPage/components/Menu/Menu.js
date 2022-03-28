import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import MainMenu from '../MainMenu/MainMenu'
import Cart from '../Cart/Cart'
import './Menu.css'

function Menu(props) {
  const {restaurant}=props

  return (
    <div className='max-width items-menu'>
    <div className="side-container" >
    <Sidebar sidemenu={restaurant.data.sidemenu}/>
    </div>
    <div className="seperator"/>

    <div className="main-container">
    <MainMenu menudata={restaurant.data.menudata} cartItems={restaurant.cartItems} onAdd={restaurant.onAdd} onRemove={restaurant.onRemove}/>

    </div>
    <div className="cart-cont">
    <Cart cartItems={restaurant.cartItems} onAdd={restaurant.onAdd} onRemove={restaurant.onRemove}/>

    </div>
  </div>

  )

  
}


export default Menu