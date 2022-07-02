import React from "react";

function Input(props) {
  return (
    <div className="input-block">
      <label htmlFor={props.for} className="input-label">{props.label}</label>
      <input type={props.type} name={props.name} id={props.id} className={props.className}></input>
    </div>
  );
}

export default Input;
