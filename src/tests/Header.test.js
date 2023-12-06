import { render, screen } from "@testing-library/react";
import Header from "../components/Organisms/Header/Header";

test("renders Store component", () => {
  render(<Header />);
  const storeText = screen.getByText(/React Basic Store/i);
  expect(storeText).toBeInTheDocument();
});
