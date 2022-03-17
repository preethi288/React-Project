import React from 'react'
import './Checkbox.css'

function Checkbox(props) {
  const {vegFilter}=props
  return (
    <div className='o2gg'>
        <input type="checkbox" className="ch" id="veg" onChange={vegFilter}/>
        <label htmlFor="veg" className='veg'>Veg Only</label>
    </div>
  )
}

export default Checkbox