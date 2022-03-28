import React, { useState} from "react";
import "./MainMenu.css";
import { VEG_ICON } from "../../../../Images/index";
import { NONVEG_ICON } from "../../../../Images/index";
import { STAR_ICON } from "../../../../Images/index";
import CartItems from "../CartItems/CartItems";
import Additem from "./Additem";
import Image from "../../../../atoms/Image/Image";
import Search from "../../helpers/Search/Search";
import Checkbox from "../../helpers/Checkbox/Checkbox";
import IconText from "../../../../molecules/IconText/IconText";

function MainMenu(props) {
  const { menudata, onAdd, onRemove, cartItems } = props;
  const [menuItems, setmenuItems] = useState(menudata);

  return (
    <div>
      <div className="search-container">
        <Search menudata={menudata} setmenuItems={setmenuItems}/>
        <Checkbox menudata={menudata} setmenuItems={setmenuItems}/>
        <div className="fav">
          <IconText text={"favourite"} icons={"fa fa-heart"} />
        </div>
      </div>

      <h1>Recommended</h1>
      <p>5 Items</p>
      <div>
        {menuItems.map((item) => {
          return (
            <div className="menu-contain" key={item.id}>
              <div className="left-menu">
                <div className="icon-container">
                  <div className="vegicons">
                    <Image
                      alt={"Veg icon"}
                      className={"icons"}
                      src={`${item.isVeg === true ? VEG_ICON : NONVEG_ICON}`}
                    />
                  </div>
                  <div
                    style={{ display: item.isBestseller ? "block" : "none" }}
                    className="bestsell"
                  >
                    <img className="besticon" src={STAR_ICON} alt="Star icon" />
                    <span className="sell">BestSeller</span>
                  </div>
                </div>

                <div className="item-name">
                  <h1>{item.Name}</h1>
                </div>
                <div className="item-price">
                  <p>Rs.{item.Price}</p>
                </div>
                <div
                  className="item-desc"
                  style={{ display: item.Descr ? "block" : "none" }}
                >
                  <span className="descr">{item.Descr}</span>
                </div>
              </div>
              <div className="right-menu">
                <div className="food-image">
                  <span>
                    <Image
                      src={item.image}
                      alt={"Food image"}
                      className={"foodimg"}
                    />
                  </span>
                </div>
                <div className="addbtn">
                  <Additem item={item} onAdd={onAdd} />
                </div>
                <div className="addbtn2">
                  {cartItems.map((i) =>
                    i.id === item.id ? (
                      <CartItems
                        item={item}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        cartItems={i}
                      />
                    ) : null
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainMenu