import React from 'react'
import "../Cart/Cart.css"
import cart from "../../../Images/cart.png"
import vegicon from "../../../Images/veg-icon.png"
import nonVegicon from "../../../Images/non-veg icon.png"

function Cart(props) {
    const {cartItems,onAdd,onRemove}=props
    const {itemsprice}= cartItems.reduce((a,c)=>a+c.price*c.qty,0)
    const {itemqty}=cartItems.reduce((a,c)=>a+c.qty,0)


    
  return (
    <div>
        <div className="m3" style={{display: cartItems.length===0? 'block': 'none'}}>
       <h1>CART EMPTY</h1>
       <div className="ima">
           <img className="img" src={cart} alt="Cart pic"/>
       </div>
       <div className="good">
           <p>Good food is always cooking, go ahead and order some items from the menu.</p>
       </div>
    </div>
    <div className="m4" style={{display:cartItems.length!=0 ? 'block':'none'}}>
    <h1>Cart</h1>

        <div className='m41'>
        <p>{itemqty}</p>
        {
            cartItems.map((item)=>{
                return(
                    <div key={item.id} className='cart-row'> 
                    <div className="vegicons">
                     <img
                        alt="Veg icon"
                        className="icons"
                        src={`${item.isVeg === true ? vegicon : nonVegicon}`}/>
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
        <div>
            <span>Subtotal : {itemsprice}</span>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Cart