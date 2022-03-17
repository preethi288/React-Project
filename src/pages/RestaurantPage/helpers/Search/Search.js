import React from "react";
import "./Search.css";
// import Input from '../../../../atoms/Input/Input'

function Search(props) {
  const { SearchItems } = props;
  

  return (
    <div className="o1gg">

      <span className="ol1">
        <span className="fa fa-search ic"></span>
        <input type="text" onChange={SearchItems} id="dishes" />
        <label htmlFor="dishes"></label>
      </span>
    </div>
  );
}

export default Search;
