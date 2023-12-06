import { render, screen } from "@testing-library/react";
import Store from "../components/Organisms/Store/Store";

test("renders Store component", () => {
  render(<Store items={[]} />);
  const storeText = screen.getByText(/Store/i);
  expect(storeText).toBeInTheDocument();
});
