import React from 'react'
import "../Title/Title.css"

function Title(props) {
    const {text,location1,location2}=props
  return (
    <div className='kitch'>
        <span className='a1'><h1 >{text}</h1></span>
        <span className='a2'><p >{location1}</p></span>
        <p>{location2}</p>

    </div>
  )
}

export default Title