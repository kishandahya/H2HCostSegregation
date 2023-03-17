import { React, render } from "@testing-library/react";
import CTAButton from "../../components/CTAButton";

test("renders CTAButton", () => {
  const { getByText } = render(<CTAButton />);
  expect(getByText("CTAButton")).toBeInTheDocument();
});
