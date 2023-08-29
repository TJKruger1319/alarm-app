import AddAlarm from "../Components/AddAlarm";
import { render } from "@testing-library/react";
import React from "react"; 


it("Should render the select elements", function() {
    const addAlarmComponent = render(<AddAlarm />);
    expect(addAlarmComponent).toContainHTML(<select></select>);
})

it("matches snapshot", function() {
    const {asFragment} = render(<AddAlarm />);
    expect(asFragment()).toMatchSnapshot();
  });