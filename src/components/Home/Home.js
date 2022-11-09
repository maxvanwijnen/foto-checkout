import React from "react";
import { PhotoGrid } from './../PhotoGrid/PhotoGrid';
import { Basket } from '../Basket/Basket';
import css from './home.module.css';
import { Header } from './../Header/Header';


export function Home (){

    return (
        <div className="container">
            <Header />

            <div className={css['content-wrapper']}>
                <PhotoGrid />
                <Basket />
            </div>

        </div>
    );
}

export default Home;