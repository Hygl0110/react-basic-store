import React from "react";
import Nav from "../../molecules/Nav/Nav";

function Header(props) {
  return (
    <div>
      <h1>React Basic Store</h1>
      <Nav {...props} />
    </div>
  );
}

export default Header;
