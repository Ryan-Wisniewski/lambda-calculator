import React from "react";

export const NumberButton = (props) => {
  return (
  <div className='gridBox'> 
    <button className="button">{props.buttonNum}</button>
  </div>
   
  );
};

