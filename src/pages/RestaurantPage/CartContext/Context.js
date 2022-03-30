import React,{createContext} from 'react'
import data from '../services/Itemdata';
import OfferData from '../services/OfferData';
import TitleData from '../services/TitleData';
import Headerdata from '../services/HeaderData';
import food from '../../../Images/food.jpeg'

export const CartContext=createContext();

const Context=({children})=>{  

   const restaurantDetails={
     name:'Kitchens Of Punjab',
     data:data,
     OfferData:OfferData,
     TitleData:TitleData,
     Headerdata:Headerdata,
     food:food
    }
    
    return(
        <div>
         <CartContext.Provider value={restaurantDetails}>
          {children}
        </CartContext.Provider>
        </div>
    )
}


export default Context