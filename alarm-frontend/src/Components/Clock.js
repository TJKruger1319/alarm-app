import React, { useContext } from "react";
import { Context } from "./Context";

function Clock() {
    const { hour, minute, amPm} = useContext(Context);

    return (
        <div>
            <div>{`${hour}:`}</div>
            <div>{`${minute}`}</div>
            <div>{`${amPm}`}</div>
        </div>
    )
}

export default Clock;