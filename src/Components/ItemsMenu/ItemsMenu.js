import React from 'react'
import Sidebar from "../Menu/Sidebar/Sidebar"
import Cart from "../Menu/Cart/Cart"
import MainMenu from "../Menu/MainMenu/MainMenu"
import "../ItemsMenu/Itemsmenu.css"
import data from "../Data/ItemData"
import menu from "../Data/MenuData"
import { useState ,useEffect} from 'react'


function ItemsMenu() {

  const {sidemenu}=data;
  const {menudata}=menu;
  const [cartItems,setcartItems]=useState([])


  const onAdd=(product)=>{
    //To check if product already exist in cart then
    const exist=cartItems.find((x)=>x.id===product.id);
    //if product exist in cart then find that item inside cart and increase quantity of it
    if(exist){
      setcartItems(cartItems.map(x=> x.id===product.id ? {...exist,qty:exist.qty+1 }: x))
    }
    //In the else part the product does not exist in the cart, so add it to the cart
    else{
      setcartItems([...cartItems,{...product,qty:1}])
    }

  }


  const onRemove=(product)=>{
    //To check if product exist in cart
    const exist=cartItems.find(x=>x.id===product.id);
    //if quantity reaches to 1 and minus then filter only items with not that product id to display
    if(exist.qty===1)
    {
      setcartItems(cartItems.filter(x=>x.id!==product.id))
    }
    //Decrease the quantity by 1
    else{
      setcartItems(cartItems.map(x=>x.id===product.id?{...exist,qty:exist.qty-1}:x))
    }
  }
  


  return (
    <div className='max-width items-menu'>
      <div className="side-container" >
      <Sidebar sidemenu={sidemenu}/>
      </div>
      <div className="line"/>

      <div className="main-container">
      <MainMenu menudata={menudata} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>

      </div>
      <div className="cart-cont">
      <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>

      </div>
    </div>
  )
}

export default ItemsMenu