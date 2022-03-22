import React from "react";
import "./Search.css";

function Search(props) {
  const { SearchItems } = props;
  return (
    <div className="o1gg">

      <span className="ol1">
        <span className="fa fa-search ic"></span>
        <input type="text" onChange={SearchItems} id="dishes"  placeholder="Search items here..."/>
        <label htmlFor="dishes"></label>
      </span>
    </div>
  );
}

export default Search;
