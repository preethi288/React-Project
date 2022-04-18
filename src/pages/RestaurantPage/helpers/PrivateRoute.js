import React from 'react'
import { connect } from 'react-redux'
import { Navigate,Outlet } from 'react-router-dom'

const PrivateRoute = ({cartItems,redirectTo}) => {
    const isAllowed=cartItems.length!==0?true:false;
    return !isAllowed?<Navigate to={redirectTo}/>:<Outlet/>
};



const mapStateToProps=(state)=>{
    return{
        cartItems:state.cartreducer.cartItems
    }
}

export default connect(mapStateToProps)(PrivateRoute)