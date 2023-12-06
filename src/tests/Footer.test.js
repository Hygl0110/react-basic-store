import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Organisms/Footer/Footer";

test("renders Cart component", () => {
  render(<Footer />);

  const footerText = screen.getByText(/Developer/i);
  expect(footerText).toBeInTheDocument();
});
