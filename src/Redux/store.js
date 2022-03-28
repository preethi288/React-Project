import { createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './Reducer/RootReducer'


    
const initialState={}


const middleware = [thunk]

const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
console.log(store)

export default store