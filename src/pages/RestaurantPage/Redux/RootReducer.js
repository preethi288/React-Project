import cartreducer from './CartReducer'

const redux=require('redux')
const combineReducers=redux.combineReducers

const rootReducer=combineReducers({
    cartreducer:cartreducer,
    
})


export default rootReducer