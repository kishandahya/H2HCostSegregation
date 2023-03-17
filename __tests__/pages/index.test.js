import React from 'react';
import { render } from "@testing-library/react";
import Index from "../../pages/index";

test("renders Index", () => {
  const { getByText } = render(<Index />);
  expect(getByText("Index")).toBeInTheDocument();
});
