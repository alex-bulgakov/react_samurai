import React from 'react';
import s from './Logo.module.css';

const Logo = () => {
    return (
        <div>
            <a href="/profile"><img className={s.logo} src="logo.png" alt="logo"/></a>
        </div>
    );
}

export default Logo;