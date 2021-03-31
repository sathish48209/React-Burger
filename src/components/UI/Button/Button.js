import React from 'react';
import classes from './Button.module.css';


function Button(props) {
  return (
    <div>
      <button
        disabled= {props.disabled}
        onClick={props.clicked}
        className={[classes.Button,classes[props.btnType]].join(' ')}>{props.children}
      </button>
    </div>
  )
}

export default Button
