import Math from "../Components/Math";
import { render } from "@testing-library/react";
import React from "react"; 

it("Renders the text", function() {
    const { queryByText } = render(<Math />);
    expect(queryByText("Solve the math problem:")).toBeInDocument();
});

it("Renders the form", function() {
    const mathComponent = render(<Math />);
    expect(mathComponent).toContainHTML(<form></form>);
});

it("matches snapshot", function() {
    const {asFragment} = render(<Math />);
    expect(asFragment()).toMatchSnapshot();
  });