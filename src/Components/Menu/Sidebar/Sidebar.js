import React, { useState } from 'react'
import "../Sidebar/Sidebar.css"
import data from '../../Data/ItemData'
import { orange } from '@mui/material/colors'

function Sidebar(props) {
  const {sidemenu}=props
  const[active,setState]=useState('Recommended')

  const activeStyle = { color: "#fc8019" }

  return (
    <div>
      <ul className='side-list'>
        {
            sidemenu.map((item)=>{
                return(
                    <div key={item.id} style={active === item.name ? activeStyle : {}} >
                      <li className='side-items'>{item.name}</li>
                      </div>
                )
            })
        }
        </ul>
    </div>
  )
}

export default Sidebar