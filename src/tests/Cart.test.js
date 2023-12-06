import React from "react";
import { render, screen } from "@testing-library/react";
import Cart from "../components/Organisms/Cart/Cart";

test("renders Cart component", () => {
  render(<Cart total={50} items={[]} />);

  const cartTitle = screen.getByText(/Cart/i);
  expect(cartTitle).toBeInTheDocument();

  const totalText = screen.getByText(/Total: \$50/i);
  expect(totalText).toBeInTheDocument();
});
