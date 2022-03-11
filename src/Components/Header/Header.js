import {  ArrowDropDownOutlined, HelpOutline, Person, ShoppingCart } from "@mui/icons-material";
import React from "react";
import "../Header/Header.css"
import mainlogo from "../../Images/swiggy-icon.svg"



function Header(){
    return(
        // <header>
        //     <div className="navbar">
        //         <div className="left">
        //             <a href="https://swiggy.com"><img className="i" alt="Swiggy pic"></img></a>
        //             <span className="loc">Set Location</span>
        //             <span className="click">Click to choose Location</span>
        //             <ArrowDropDownOutlined className="icon"/>
        //         </div>
        //         <div className="right">
        //             <div className="k1">
        //                 <span className="help"><HelpOutline/></span>
        //                 <span>Help</span>
        //             </div>
        //             <div className="k2">
        //                 <span className="signin"><Person/></span>
        //                 <span>Sign in</span>
        //             </div>
        //             <div className="k3">
        //                 <span className="cart"><ShoppingCart/></span>
        //                 <span>Cart</span>
        //             </div>
        //         </div>
        //     </div>
        // </header>

        <div className="navbar">
            <div className="container max-width">

            <div className="left">

            <a href="https://swiggy.com"><img src={mainlogo} className="i" alt="Swiggy Pic"></img></a>

                <span className="set-location">Set Location</span>
                <span className="click-loc">Click to choose Location <ArrowDropDownOutlined className="down-arrow"/></span>
                
               

            </div>

            <div className="right">
                <div className="help-container">
                    <span className="help-outline"><HelpOutline/></span>
                    <span>Help</span>
                </div>
                <div className="signin-container">
                    <span className="signin-outline"><Person/></span>
                    <span>Sign in</span>
                </div>
                <div className="Cart-container">
                    <span className="cart-outline"><ShoppingCart/></span>
                    <span>Cart</span>
                </div>
            </div>
            </div>
        </div>


    )

}

export default Header