import { ADD_ITEM} from "./CartType";
import { REMOVE_ITEM } from "./CartType";

const initialState={
    cartItems:[]
}

const cartreducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_ITEM:
            const exist=state.cartItems.find((x)=>x.id===action.payload.id)
            if(exist){
                return{
                    ...state,
                    cartItems:state.cartItems.map(x=> x.id===action.payload.id ? {...exist,qty:exist.qty+1 }: x)
                    
                }
            }
            else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,{...action.payload,qty:1}]
                }
            }

        case REMOVE_ITEM:
            const exist1=state.cartItems.find((x)=>x.id===action.payload.id)

            if(exist1.qty===1){
                return{
                    ...state,
                    cartItems:state.cartItems.filter(x=>x.id!==action.payload.id)
                }
            }
            else{
                return{
                    cartItems:state.cartItems.map(x=> x.id===action.payload.id ? {...exist1,qty:exist1.qty-1 }: x)

                }
            }    
    
        default:
            return state;
    }

}

export default cartreducer