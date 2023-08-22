import React, { useContext } from "react";
import { Context } from "./Context";

function Clock() {
    // Displays digital clock of the time
    const { realHour, realMinute, amPm} = useContext(Context);

    return (
        <div>
            <h1>{`${realHour}:${realMinute} ${amPm}`}</h1>
        </div>
    )
}

export default Clock;