import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Cart.css"
import cart from "../../../../Images/cart.png"
import {VEG_ICON} from "../../../../Images/index"
import {NONVEG_ICON} from "../../../../Images/index"
import Image from '../../../../atoms/Image/Image'


function Cart(props) {
    const {onAdd,onRemove,cartItems}=props
    const Navigate=useNavigate()

    const total=()=>{
        var totalcount=0
        for( var x in cartItems)
        {
            totalcount+=cartItems[x].qty

        }
        return totalcount
    }
    const subtotal=()=>{
        var total=0
        for(var item in cartItems)
        {
            total+=cartItems[item].Price*cartItems[item].qty
        }
        return total
    }
 


    
  return (
    <div>
        <div className="m3" style={{display: cartItems.length===0? 'block': 'none'}}>
       <h1>CART EMPTY</h1>
       <div className="ima">
           <Image className={"img"} src={cart} alt={"Cart Pic"}/>
       </div>
       <div className="good">
           <p>Good food is always cooking, go ahead and order some items from the menu.</p>
       </div>
    </div>
    <div className="m4" style={{display:cartItems.length!==0 ? 'block':'none'}}>
    <h1>Cart</h1>
    <p>({total()} items)</p>


        <div className='m41'>
        {
            cartItems.map((item)=>{
                return(
                    <div key={item.id} className='cart-row'> 
                    <div className="vegicons">
                        <Image alt={"Veg Icon"} className={"icons"} src={`${item.isVeg === true ? VEG_ICON : NONVEG_ICON}`}/>
                    </div>
                        <span className='cart-name'>{item.Name}</span>
                        <button onClick={()=>onRemove(item)} className='Remove'>-</button>
                        <span className='item-qty'>
                        <p className='qt'>{item.qty}</p>
                        </span>
                        <button onClick={()=>onAdd(item)} className='add-itm'>+</button>

                        <div className='pq'>
                            Rs.{item.Price * item.qty} 
                        </div>
                
                        
                    </div>
                    
                )
            })
            
        }
        
    </div>
    <div className='subtotal'>
            <span className='sub'>Subtotal :</span>
            <span className='tot'>Rs. {subtotal()}</span>
    </div>
    </div>
    <div className="m45">
        <button type="button" className="m46n" onClick={()=>Navigate('thank-you')}>CHECKOUT</button>
    </div>
    </div>
  )
}

export default Cart