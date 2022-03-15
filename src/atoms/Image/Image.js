import React from 'react'

function Image(props) {
    const {alt,className,src}=props

  return (
    <div>
        <img alt={alt} className={className} src={src}/>
    </div>
  )
}

export default Image