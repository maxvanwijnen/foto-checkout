import React, {useContext} from "react";

import css from './loginform.module.css';
import {PhotoshootContext} from "../../context/PhotoshootContext";

export function LoginForm (){

    const {login} = useContext(PhotoshootContext);

    const submitForm = (e) => {
        e.preventDefault();

        login(e.target[0].value);

    }
    return (
        <div className={css['container']}>

                <img className={css['logo']} src="https://www.maxvanwijnen.nl/www/images/logo-maxvanwijnen-fotografie-black.png" />
                <form onSubmit={(e)=>submitForm(e)}>
                    <input type="text" name="loginCode" placeholder="Vul hier je code in"/>
                    <button type="submit">Inloggen</button>
                </form>



        </div>
    );
}

export default LoginForm;