import React from 'react'
import "./Sidebar.css"

function Sidebar(props) {
  const {sidemenu}=props

  const activeStyle = { color: "#fc8019" }

  return (
    <div>
      <ul className='side-list'>
        {
            sidemenu.map((item)=>{
                return(
                    <div key={item.id} style={'Recommended' === item.name ? activeStyle : {}} >
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