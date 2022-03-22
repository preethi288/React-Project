import { createStore ,compose} from 'redux'
import rootReducer from './RootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
const initialStore={
    cartreducer:{
       cartItems: JSON.parse(localStorage.getItem('cartItems'))?? []
}
}

const store=createStore(rootReducer,initialStore,composeEnhancers())

export default store