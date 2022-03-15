import React from 'react'
import './Search.css'
import Input from '../../../../atoms/Input/Input'

function Search(props) {
  return (
    <div>
        <span className='fa fa-search'></span>
       <span className='ol1'>
       <Input text={"Search for dishes..."} id={'dishes'}/>
       <label htmlFor="dishes"></label>
       </span>
    </div>
  )
}

export default Search