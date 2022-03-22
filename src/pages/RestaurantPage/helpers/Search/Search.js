import React,{useState,useEffect} from "react";
import "./Search.css";

function Search(props) {
  const { menudata,setmenuItems} = props;
  const [Value, setValue] = useState("");

  function SearchItems(event) {
    var mainmenuItems = [];

    setValue(event.target.value);
    for (var x in menudata) {
      if (menudata[x].Name.toLowerCase().indexOf(Value.toLowerCase()) !== -1) {
        mainmenuItems.push(menudata[x]);
      }
    }
    setValue(mainmenuItems);
    if (mainmenuItems.length !== 0) {
      setmenuItems(mainmenuItems);
    }
  }
  useEffect(() => {
    if (Value === "") {
      setmenuItems(menudata);
    }
  }, [Value,setmenuItems,menudata]);


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
