import React from 'react'
import "../Sidebar/Sidebar.css"

function Sidebar(props) {
  const {sidemenu}=props
  return (
    <div>
      <ul className='side-list'>
        {
            sidemenu.map((item)=>{
                return(
                    <div key={item.id}>
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