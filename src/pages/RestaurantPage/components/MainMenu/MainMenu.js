import React, { useState } from "react";
import "./MainMenu.css";
import { VEG_ICON } from "../../../../Images/index";
import { NONVEG_ICON } from "../../../../Images/index";
import { STAR_ICON } from "../../../../Images/index";
import CartItems from "../CartItems/CartItems";
import Additem from "./Additem";
import Image from "../../../../atoms/Image/Image";
import Search from "../../helpers/Search/Search";
import { useEffect } from "react";
import Checkbox from "../../helpers/Checkbox/Checkbox";
import IconText from "../../../../molecules/IconText/IconText";

function MainMenu(props) {
  const { menudata, onAdd, onRemove, cartItems } = props;

  const [Value, setValue] = useState("");
  const [menuItems, setmenuItems] = useState(menudata);
  const [vegChecked, setVegChecked] = useState(true);

  const SearchItems = (event) => {
    var mainmenuItems = [];

    setValue(event.target.value);
    for (var x in menudata) {
      if (menudata[x].Name.toLowerCase().indexOf(Value.toLowerCase()) !== -1) {
        mainmenuItems.push(menudata[x]);
      }
    }
    setValue(mainmenuItems);
    console.log(mainmenuItems);
    if (mainmenuItems.length !== 0) {
      setmenuItems(mainmenuItems);
    }
  };
  const vegFilter = () => {
    setVegChecked(!vegChecked);
    let filterMainMenuItems = [];
    if (vegChecked) {
      for (let x in menudata) {
        if (menudata[x].isVeg === true) {
          filterMainMenuItems.push(menudata[x]);
        }
      }

      setmenuItems(filterMainMenuItems);
    } else {
      for (let x in menudata) {
        filterMainMenuItems.push(menudata[x]);
      }
      setmenuItems(filterMainMenuItems);
    }
  };

  useEffect(() => {
    if (Value === "") {
      setmenuItems(menudata);
    }
  }, [Value,menudata]);

  return (
    <div>
      <div className="search-container">
        <Search SearchItems={SearchItems} />
        <Checkbox vegFilter={vegFilter} />
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