import React, {useState} from "react";
import Arrows from "../../atoms/Arrows";

const StarlinkHeader = ({
    sort, triggerSort
 }) => {
    const [isHovered, setIsHovered] = useState(false);


    return(
        <div className="table__title">
            <div
                className="type"
                onMouseLeave={() => setIsHovered(false)}
                onMouseOver={() => setIsHovered(true)}
            >
                Height [km]
                <Arrows
                    isHovered={ isHovered }
                    sort={sort}
                    onClick={triggerSort}

                />
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
