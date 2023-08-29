import { render } from "@testing-library/react";
import React from "react"; 
import Alarm from "../Components/Alarm";

it("Should render properly", function() {
    const alarmComponent = render(<Alarm 
        AMorPM={"AM"}
        difficulty={1}
        hour={1}
        id={1}
        minute={30}
        type={"Pokemon"}
        />);
    expect(`Type: Pokemon Difficulty: 1`).toBeInDocument(alarmComponent)
    
});


it("matches snapshot", function() {
    const {asFragment} = render(<Alarm />);
    expect(asFragment()).toMatchSnapshot();
});