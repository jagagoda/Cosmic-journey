import React from 'react';
import './_circles.scss';
import circle1 from "../../../assets/circle1.png";
import circle2 from "../../../assets/circle2.png";
import circle3 from "../../../assets/circle3.png";

const Circles = () => {
    return (
        <>
            <div className="circle1">
                <img src={circle1} alt="circle1"/>
            </div>
            <div className="circle2">
                <img src={circle2} alt="circle2"/>
            </div>
            <div className="circle3">
                <img src={circle3} alt="circle3"/>
            </div>
            <div className="dot dot1">
            </div>
            <div className="dot dot2">
            </div>
            <div className="dot dot3">
            </div>
        </>
    );
};

export default Circles;
