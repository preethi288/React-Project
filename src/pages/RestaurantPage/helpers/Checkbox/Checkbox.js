import React,{useState} from 'react'
import './Checkbox.css'

function Checkbox(props) {
  const {menudata,setmenuItems}=props
  const [vegChecked, setVegChecked] = useState(true);


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

  return (
    <div className='o2gg'>
        <input type="checkbox" className="ch" id="veg" onChange={vegFilter}/>
        <label htmlFor="veg" className='veg'>Veg Only</label>
    </div>
  )
}

export default Checkbox