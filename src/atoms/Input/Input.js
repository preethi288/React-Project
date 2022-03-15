import React from 'react'
import './Input.css'

function Input(props) {
    const {text,value}=props
  return (
    <div>
        <input type='text' placeholder={text} id={value}/>
    </div>
  )
}

export default Input