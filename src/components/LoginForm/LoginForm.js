import React, {useContext} from "react";

import css from './loginform.module.css';
import {PhotoshootContext} from "../../context/PhotoshootContext";

export function LoginForm (){

    const {login} = useContext(PhotoshootContext);
    console.log('dit is lokaal')

    const submitForm = (e) => {
        e.preventDefault();

        login(e.target[0].value);

    }
    return (
        <div className={css['container']}>

                <img className={css['logo']} src="https://dev4.maxvanwijnen.nl/images/logo-maxvanwijnen-fotografie-black.png" />
                <form onSubmit={(e)=>submitForm(e)}>
                    <input type="text" name="loginCode" placeholder="Vul hier je code in"/>
                    <button type="submit">Inloggen</button>
                </form>



        </div>
    );
}

export default LoginForm;