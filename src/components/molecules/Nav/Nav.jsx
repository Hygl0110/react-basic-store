import React from "react";
import Button from "../../atoms/Button/Button";

function Nav(props) {
  return (
    <div>
      <Button text="Store" onClick={props.onClickStore} />
      <Button text="Search" onClick={props.onClickSearch} />
      <Button text="Cart" onClick={props.onClickCart} />
    </div>
  );
}

export default Nav;
