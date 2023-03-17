import { React, render } from "@testing-library/react";
import Footer from "../../components/Footer";

test("renders Footer", () => {
  const { getByText } = render(<Footer />);
  expect(getByText("Footer")).toBeInTheDocument();
});
