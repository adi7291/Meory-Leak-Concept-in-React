import React from 'react'
import "./window.css";

import WindowTracker from './WindowTracker'

function WindowParent() {
      
    const [show,setShow] = React.useState(false)

    const handleClick=()=>{
       setShow(prevShow=>!prevShow)
    }

  return (
    <div>
        <button className='button' onClick={handleClick}>Toggle Window Tracker</button>
       {show && <WindowTracker  show={ show} handleClick={handleClick}/> } 
    </div>
  )
}

export default WindowParent