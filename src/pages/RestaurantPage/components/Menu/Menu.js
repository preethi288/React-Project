import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import MainMenu from '../MainMenu/MainMenu'
import Cart from '../Cart/Cart'
import data from '../../services/Itemdata'
import './Menu.css'

import {useDispatch,useSelector} from 'react-redux'

function Menu() {

    const dispatch=useDispatch()
    const {cartItems}=useSelector(state=>state.cartreducer)

    const onAdd=(product)=>{
      dispatch({
        type:'ADD_ITEM',
        payload:product
      })
      
    }

    const onRemove=(product)=>{
      dispatch({
        type:'REMOVE_ITEM',
        payload:product
      })
    }

  return (
    <div className='max-width items-menu'>
    <div className="side-container" >
    <Sidebar sidemenu={data.sidemenu}/>
    </div>
    <div className="line"/>

    <div className="main-container">
    <MainMenu menudata={data.menudata} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>

    </div>
    <div className="cart-cont">
    <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>

    </div>
  </div>

  )
}

export default Menu