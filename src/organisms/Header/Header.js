import React from "react";
import IconText from "../../molecules/IconText/IconText";
import Headerdata from "../../pages/RestaurantPage/services/HeaderData";
import "./Header.css";
import mainlogo from "../../Images/swiggy-icon.svg";
import Image from '../../atoms/Image/Image'

function Header() {
  return (
    <div className="navbar">
      <div className="container max-width">
      <div className="left">
        <a href="https://swiggy.com">
           <Image src={mainlogo} className={'i'} alt={"Swiggu Pic"}/>
        </a>
        {
          Headerdata.leftHeaderElements.map(item1=>{
            return(
              <div className="location">
                <IconText icons={item1.icon} text={item1.text} />
              </div>
            )
          })
        }
      </div>
      <div className="right">
        {Headerdata.RightHeaderOptions.map((item) => {
          return (
            <div>
              <IconText icons={item.icon} text={item.text} />
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default Header;
