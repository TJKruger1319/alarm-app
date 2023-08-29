import Typing from "../Components/Typing";
import { render } from "@testing-library/react";
import React from "react"; 

it("Renders the text", function() {
    const { queryByText } = render(<Typing />);
    expect(queryByText("Type out the sentence: ")).toBeInDocument();
});

it("Renders the form", function() {
    const typeComponent = render(<Typing />);
    expect(typeComponent).toContainHTML(<form></form>);
});

it("matches snapshot", function() {
    const {asFragment} = render(<Typing />);
    expect(asFragment()).toMatchSnapshot();
  });