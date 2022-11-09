import React, {useContext} from 'react';
import {BasketContext} from "../../context/BasketContext";
import css from './basket.module.css';
import BasketLine from "./BasketLine/BasketLine";
import PriceSummary from "./PriceSummary/PriceSummary.module";

export const Basket = () => {
    const { basket } =useContext(BasketContext);

    return(
        <div className={css['basket-wrapper']}>

            {
                basket.photoList.length > 0 &&
                <>
                <h2>Samenvatting</h2>
                    <h3>Foto selectie</h3>
                {basket.photoList.map(
                    (photo) => <BasketLine key={photo.src} photo={photo} />
                )}
                    <PriceSummary />
                    {basket.basketWarning  && <div className={css['basket-warning']}>{basket.basketWarning}</div>}
                    <button className={css['next-button']}>Volgende</button>
                </>
            }
            {
                basket.photoList.length === 0 &&
                <h2>Nog geen foto's geselecteerd</h2>

            }

        </div>
    )
}

export default Basket;