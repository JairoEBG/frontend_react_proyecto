import React from 'react'

export const ColorCode = ({param, txt}) => {       
    return (
      <a>
          <a className = {param == 'in_time' || param == 'over_time' || param == 'delayed'
            ? param : ''} 
            style ={{margin: "10px"}}>
            {txt}
          </a>
      </a>
    )
  }
  
