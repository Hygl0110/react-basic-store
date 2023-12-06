import React from "react";
import { Renderer, render } from "@testing-library/react";
import Cart from "../components/Organisms/Cart/Cart";

test("renders Cart component", () => {
  const { getBytext } = render(<Cart total={50} />);

  const cartTitle = getBytext(/Cart/i);
  expected(cartTitle).toBeInTheDocument();

  const totalText = getBytext(/Total: \$50/i);
  expected(totalText).toBeInTheDocument();
});
