import React from 'react';
import './radioButtons.css';

function RadioButtons(props){

  let {id, value , onClickHandler, labelText} = props

  return (
    <div className>
    <input
      type="radio"
      id={id}
      name="radioBtn"
      value={value}
      onChange={onClickHandler}
    />
    <label htmlFor={id} className="radioBtnLabel">
      {labelText}
    </label>
  </div>
  )
}

export default RadioButtons;
