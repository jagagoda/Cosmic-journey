import './_footer.scss';
import RightText from '../../../assets/rightText.svg';
import LeftText from '../../../assets/leftText.svg';
import React from 'react';

const Footer = () => {
    return (
        <div className="footer__container">
            <img src={LeftText} alt="Copyright" className="footer__text-left"/>
            <img src={RightText} alt="Recruiment Task" className="footer__text-right"/>
        </div>
    );
};

export default Footer;
