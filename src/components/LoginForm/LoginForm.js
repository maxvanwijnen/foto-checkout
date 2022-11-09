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
        <div className="container">
            <h1>Home</h1>
            <div className={css['content-wrapper']}>
                <form onSubmit={(e)=>submitForm(e)}>
                    <input type="text" name="loginCode"/>
                    <button type="submit">Inloggen</button>
                </form>

            </div>

        </div>
    );
}

export default LoginForm;