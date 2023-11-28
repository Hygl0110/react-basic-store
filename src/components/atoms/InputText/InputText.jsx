import React from "react";

function InputText(props) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      id={props.name}
      required
    />
  );
}

export default InputText;
