import { ADD_ITEM } from "./CartType";
import { REMOVE_ITEM } from "./CartType";

//Action Creator
export const addItem=(product)=>{
    return{
        type:ADD_ITEM,
        payload:product
    }
}

export const removeItem=(product)=>{
    return{
        type:REMOVE_ITEM,
        payload:product
    }
}




