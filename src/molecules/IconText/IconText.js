import React from 'react'
import "./IconText.css"
import Icons from "../../atoms/Icons/Icons"
import Text from "../../atoms/text/text"


function IconText(props) {
    const {icons,text}=props
  return (
    <div>
        <Icons icons={icons} />
        <Text text={text}/>
    </div>
  )
}

export default IconText