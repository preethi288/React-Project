import React from 'react'
import "../MainMenu/MainMenu.css"

function Additem(props) {
    const {item,onAdd}=props
  return (
    <div>
    <button className="add" onClick={()=>onAdd(item)}>ADD</button>
    </div>
  )
}

export default Additem