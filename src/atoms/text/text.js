import React from "react";

require("./text.js")

function Text(props){
    const {text}=props
    return(
        <span >{text}</span>
    )

}
export default Text