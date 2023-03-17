import React from "react";
import { render } from "@testing-library/react";
import ContactUs from "../../pages/contact-us";
test("renders ContactUs", () => {
  const { getByText } = render(<ContactUs />);
  expect(getByText("Contact Us")).toBeInTheDocument();
});
