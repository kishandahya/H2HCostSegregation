import React from "react"
import { render } from "@testing-library/react";
import App from "../../pages/_app";
test("renders App", () => {
  const { getByText } = render(<App />);
  expect(getByText("App")).toBeInTheDocument();
});
