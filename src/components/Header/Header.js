import React from 'react';
import {useContext} from "react";
import {PhotoshootContext} from "../../context/PhotoshootContext";
import css from './header.module.css';

export const Header = () => {

    const {logout} = useContext(PhotoshootContext);

    return (
        <header className={css['header']}>
            <div><img
                className={css['logo']}
                src="https://www.maxvanwijnen.nl/www/images/logo-maxvanwijnen-fotografie-black.png" /> </div>
            <button onClick={logout}>Afmelden</button>
        </header>
    )
}

export default Header;