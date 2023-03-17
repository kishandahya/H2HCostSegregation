import { React, render } from "@testing-library/react";
import Navbar from "../../components/Navbar";

test("renders Navbar", () => {
  const { getByText } = render(<Navbar />);
  expect(getByText("Navbar")).toBeInTheDocument();
});
