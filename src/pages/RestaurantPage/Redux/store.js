import { createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../Redux/Reducer/RootReducer'


    
const initialStore={
    cartreducer:{
       cartItems: JSON.parse(localStorage.getItem('cartItems'))?? []
}
}

const middleware = [thunk]

const store=createStore(rootReducer,initialStore,composeWithDevTools(applyMiddleware(...middleware)))
console.log(store)

export default store