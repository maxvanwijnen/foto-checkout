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
                src="https://dev4.maxvanwijnen.nl/images/logo-maxvanwijnen-fotografie-black.png" /> </div>
            <button onClick={logout}>Afmelden</button>
        </header>
    )
}

export default Header;