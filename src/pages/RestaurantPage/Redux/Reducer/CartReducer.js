import { ADD_ITEM} from "../Action/CartType";
import { REMOVE_ITEM } from "../Action/CartType";

const cartreducer=(state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]")}, action)=>{
    switch (action.type) {
        case ADD_ITEM:
            return { cartItems: action.payload.cartItems };

        case REMOVE_ITEM:
            return { cartItems: action.payload.cartItems };

        default:
            return state;
    }

}

export default cartreducer