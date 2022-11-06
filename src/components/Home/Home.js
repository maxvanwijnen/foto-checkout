import React from "react";
import { PhotoGrid } from './../PhotoGrid/PhotoGrid';
import { Basket } from '../Basket/Basket';
import css from './home.module.css';

export function Home (){

    return (
        <div className="container">
            <h1>Home</h1>
            <div className={css['content-wrapper']}>
                <PhotoGrid />
                <Basket />
            </div>

        </div>
    );
}

export default Home;