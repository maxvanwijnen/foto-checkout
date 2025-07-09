import React from 'react';
import css from './prints.module.css';
import Header from './../Header/Header';
import {Link} from "react-router-dom";
import PrintPhoto from "./PrintPhoto/PrintPhoto";
import {useContext} from "react";
import {PhotoshootContext} from "../../context/PhotoshootContext";
import {BasketContext} from "../../context/BasketContext";
import Basket from "../Basket/Basket";

export const Prints = () => {

    const { photoList } = useContext(BasketContext).basket;

    console.log(photoList)

    return (
        <div className={css['print']}>
            <Header />

            <div className={css['content-wrapper']}>
                <div className={css['left-column']}>
                    <Link to="/" className={css['back-link']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5"></path>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Terug naar fotoselectie
                    </Link>
                    <div className={css['print-photos']}>
                        {photoList.map((photo) => (
                            <PrintPhoto
                                photo={photo}
                                key={photo.src}
                            />
                        ))}
                    </div>
                </div>
                <div className={css['right-column']}>
                    <Basket />
                </div>
            </div>
        </div>
    )
}

export default Prints;