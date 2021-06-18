import React, {useState} from 'react';
import rocket from "../../../assets/rocket.png";
import smoke1 from "../../../assets/smoke1.png";
import smoke2 from "../../../assets/smoke2.png";
import legs from "../../../assets/rocket-legs.png";
import './_planet.scss';

const Planet = () => {
    const [launching, setLaunching] = useState(false);
    const animate = () => {
        setLaunching(true);
        setTimeout(() => setLaunching(false), 5000);
    }
    return (
        <div className="planet__container">
            <div className="planet">
                <img src={rocket} alt="rocket" className={launching ? "launching" : "rocket__image"} />
                <img src={smoke1} alt="smoke1" className={launching ? "shake1" : "smoke1__image" }/>
                <img src={smoke2} alt="smoke2" className={launching ?"shake2" : "smoke2__image"}/>
                <img src={legs} alt="rocket legs" className={launching ? "fly" : "planet__img legs__image"}/>
            </div>
            <div className="button">
                <button className="rocket__btn" onClick={animate}>Launch Rocket</button>
            </div>
        </div>
    );
};

export default Planet;
