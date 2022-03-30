import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import './Checkout.css'
import Image from '../../../../atoms/Image/Image'
import {VEG_ICON} from "../../../../Images/index"
import {NONVEG_ICON} from "../../../../Images/index"

function Checkout({CartItems}) {
    const Navigate=useNavigate()
    const subtotal=()=>{
      var total=0
      for(var item in CartItems)
      {
          total+=CartItems[item].Price*CartItems[item].qty
      }
      return total
  }
    
  return (
    <div className='checkout'>
       <h1>Order Placed Sucessfully</h1>
       <h4>Summary of total Amount paid:</h4>
       {
         CartItems.map((item)=>{
          return(
              <div key={item.id} className='cartRow'> 
              <div className="vegicon">
                  <Image alt={"Veg Icon"} className={"icons"} src={`${item.isVeg === true ? VEG_ICON : NONVEG_ICON}`}/>
              </div>
                  <span className='cartName'>{item.Name}</span>

                  <div className='pqty'>
                      Rs.{item.Price * item.qty} 
                  </div>
          
                  
              </div>
              
          )
      })
       }
       <div className='subtotal'>
            <span className='sub1'>Subtotal :</span>
            <span className='tot1'>Rs. {subtotal()}</span>
    </div>
       
       <button onClick={()=>Navigate(-1)}>Go Back</button>
      </div>
  )
}

const mapStateToProps=(state)=>{
  return{
    CartItems:state.cartreducer.cartItems
  }
}

export default connect(mapStateToProps)(Checkout)