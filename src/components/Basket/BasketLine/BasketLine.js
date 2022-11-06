import React, {useContext} from 'react';
import {BasketContext} from "../../../context/BasketContext";
import css from "./basketline.module.css"


export const BasketLine = ({photo}) => {

    const {removePhoto} = useContext(BasketContext);
    return (
        <div className={css['basket-line']}>
            <div className={css['title-wrapper']}>
                {photo.src}
            </div>
            <div className={css['options-wrapper']}>
                <img src={"https://www.maxvanwijnen.nl/www/galleries/20220522/" + photo.src}
                     alt="preview picture"
                     className={css['photo-thumb']}
                />
                <button onClick={()=>removePhoto(photo)}>🗑️</button>
            </div>

        </div>
    )
}

export default BasketLine;