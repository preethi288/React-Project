import React from "react";


require('./Icons.css');

function Icons(props){
    const {icons}=props
    return(
        <span className={`icon-outline ${icons}`}></span>
    )

}

export default Icons