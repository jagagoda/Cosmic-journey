import Arrows from "../../atoms/Arrows";
import React, {useState} from "react";

const CapsulesHeader = ({
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
                Type
                <Arrows
                    isHovered={ isHovered }
                    sort={sort}
                    onClick={triggerSort}
                />
            </div>
            <div className="status"><h1>Status</h1></div>
        </div>
    )
}

export default CapsulesHeader;
