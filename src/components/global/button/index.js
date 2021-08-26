import React from 'react';
import './_button.scss';

//import classes from './Button.module.css';

export function Button(props) {
const className = `button ${props.type}`
    return (
      <button className={className}  style={{color: props.labelColor && props.labelColor}}>
       {props.label}
      </button>
    );
   }
 