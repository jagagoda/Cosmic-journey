import React from 'react';
import Logo from '../../../assets/logo.svg';
import './_header.scss';


const Header = () => {
    return (
        <div className="header__container">
            <img className="header__logo" src={Logo} alt="logo usertive"/>
        </div>
    );
};

export default Header;
