import { ADD_ITEM } from "./CartType";
import { REMOVE_ITEM } from "./CartType";

//Action Creator

export const addItems=(product)=>(dispatch,getState)=>{
   dispatch({
       type:ADD_ITEM,
       payload:product
   })
   localStorage.setItem('cartItems', JSON.stringify(getState().cartreducer.cartItems))
}

export const removeItems=(product)=>(dispatch,getState)=>{
    dispatch({
        type:REMOVE_ITEM,
        payload:product
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cartreducer.cartItems))
 }