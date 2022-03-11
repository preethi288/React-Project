import React,{useState} from "react";
import "../MainMenu/MainMenu.css";
import vegicon from "../../../Images/veg-icon.png";
import nonVegicon from "../../../Images/non-veg icon.png";
import star from "../../../Images/star-icon.png";
import CartItems from "../../CartItems/CartItems";
import Additem from "./Additem";


function MainMenu(props) {
  const {menudata,onAdd,onRemove,cartItems}=props
  const [Bool,setBool]=useState(true)

  return (
    <div>
      <h1>Recommended</h1>
      <p>5 Items</p>
      <div>
        {menudata.map((item) => {
          return (
            <div className="menu-contain" key={item.id}>
              <div className="left-menu">
              <div className="icon-container">
                <div className="vegicons">
                  <img
                    alt="Veg icon"
                    className="icons"
                    src={`${item.isVeg === true ? vegicon : nonVegicon}`}
                  />
                </div>
                <div style={{ display: item.isBestseller ? "block" : "none" }} className="bestsell">
                  <img className="besticon" src={star} />
                  <span className="sell">BestSeller</span>
                </div>
              </div>
              <div className="item-name">
                <h1>{item.Name}</h1>
              </div>
              <div className="item-price">
                <p>Rs.{item.Price}</p>
              </div>
              <div className="item-desc" style={{ display: item.Descr ? "block" : "none" }}>
                <span className="descr">{item.Descr}</span>
              </div>
              </div>
              <div className="right-menu">
              <div className="food-image">
                <span>
                  <img src={item.image} alt="Foodimage" className="foodimg"/>
                </span>
              </div>
             {/* {cartItems.map(inj =>inj.id===item.id ? (inj.qty===0 ? setBool(false):setBool(true)):"Hi")} */}
           
              <div className="addbtn" >
                <Additem item={item} onAdd={onAdd}/>
              </div>
              <div className="addbtn2">
                {
                    cartItems.map(i=>i.id===item.id ? <CartItems item={item} onAdd={onAdd} onRemove={onRemove} cartItems={i}/>:null)

                }
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainMenu;
