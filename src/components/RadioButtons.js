import React from 'react';

function RadioButtons(props){

  let {id, value , onClickHandler, labelText} = props

  return (
    <div className="startWordContainer">
    <input
      type="radio"
      id={id}
      name="radioBtn"
      value={value}
      onClick={onClickHandler}
    />
    <label htmlFor={id} className="radioBtnLabel">
      {labelText}
    </label>
  </div>
  )
}

export default RadioButtons;
