import React from 'react'
import "../CartItems/CartItems.css"

function CartItems(props) {
    const {onRemove,onAdd,item,cartItems}=props
    
  return (
      
    <div className='c'>
        <button onClick={()=>onRemove(item)} className='Remove1'>-</button>
         <span className='item-qty1'>
         <p className='qt'>{cartItems.qty}</p>
         </span>
         <button onClick={()=>onAdd(item)} className='add-itm1'>+</button>
        
    </div>
  )
}

export default CartItems