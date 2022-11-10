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
        <div className="print">
            <Header />

            <div className={css['content-wrapper']}>
                <Link to="/" >Terug</Link>
                <div className={css['print-photos']}>
                    {photoList.map((photo) => (
                        <PrintPhoto

                            photo={photo}
                            key={photo.src}

                        />

                    ))
                    }
                </div>
                <Basket />
            </div>

        </div>
    )
}

export default Prints;