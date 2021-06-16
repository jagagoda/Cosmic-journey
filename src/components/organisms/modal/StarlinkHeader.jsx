import React from "react";

const StarlinkHeader = () => {
    return(
        <div className="table__title">
            <div
                className="type"
            >
                Height [km]
            </div>
            <div
                className="status"
            >
                <h1>Velocity [km/s]</h1>
            </div>
        </div>
    )
}

export default StarlinkHeader;
