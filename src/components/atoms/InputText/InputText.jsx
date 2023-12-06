import React from "react";

function InputText(props) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
}

export default InputText;
