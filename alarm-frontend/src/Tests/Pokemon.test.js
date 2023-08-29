import Pokemon from "../Components/Pokemon";
import { render } from "@testing-library/react";
import React from "react"; 

it("Renders the text", function() {
    const { queryByAltText } = render(<Math />);
    expect(queryByText("pokemon")).toBeInDocument();
});

it("Renders the form", function() {
    const pokeComponent = render(<Pokemon />);
    expect(pokeComponent).toContainHTML(<form></form>);
});

it("matches snapshot", function() {
    const {asFragment} = render(<Pokemon />);
    expect(asFragment()).toMatchSnapshot();
  });