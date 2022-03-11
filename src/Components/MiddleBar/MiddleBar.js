import { FavoriteBorder,Search, Star } from "@mui/icons-material";
import React from "react";
import "../MiddleBar/MiddleBar.css"
import food from "../../Images/food.jpeg"

function MiddleBar(){
    return(
        <div className="mid">
    <div className="middle max-width">
        <div className="pic">
            <div className="picture"><img className="im" src={food} alt="food pic"/></div>
        </div>
        <div className="inf">
            <div className="kitch">
                <span className="a1"><h1>Kitchens of Punjab</h1></span>
                <span className="a2">Punjabi,North Indian</span>
                <span>Billekahalli, BTM-Banglore</span>
            </div>
            <div className="rat">
                <div className="r1">
                    <div className="r11">
                        <span className="r4"><Star>4.2</Star> 4.2</span>
                        <span className="r5">50+ ratings</span>
                    </div>

                </div>
                <div className="und"></div>
                <div className="r2">
                    <div className="r11">
                        <span className="r4">--mins</span>
                        <span className="r5">Delivery Time</span>
                    </div>
                </div>
                <div className="und"></div>
                <div className="r3">
                    <div className="r11">
                        <span className="r4">Rs.400 </span>
                        <span className="r5">cost for two</span>
                    </div>
                </div>
            </div>
            <div className="o1g">
                <div className="o1gg">
                    <div className="o11">
                        <span ><Search/></span>
                        <span className="ol1">
                            <input type="search" className="se" id="dishes" placeholder=" Search for dishes..."/>
                            <label htmlFor="dishes"></label>
                        </span>
                    </div>
                    
                </div>
                <div className="o2gg">
                    <div className="o11">
                        <span className="o13">
                            <input type="checkbox" className="ch" id="veg"/>
                            <label htmlFor="veg">Veg Only</label>
                        </span>
                    </div>
                </div>
                <div className="o3gg">
                    <div className="o11">
                        <span><FavoriteBorder/></span>
                        <span className="ol4">
                              Favourite
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="offer">
            <div className="oo1">
                Offer
            </div>
            <div className="off">
                <div className="o1"><Star/>  50% off upto Rs.100 | use code TRYNEW</div>
                <div className="o1"><Star/>  30% off upto Rs.150 on orders above Rs.400 | Use code JUMBO</div>
            </div>
            
        </div>
    </div>
    </div>
    )
}

export default MiddleBar