import { React, render } from "@testing-library/react";
import LandingPage from "../../components/LandingPage";

test("renders LandingPage", () => {
  const { getByText } = render(<LandingPage />);
  expect(getByText("LandingPage")).toBeInTheDocument();
});
