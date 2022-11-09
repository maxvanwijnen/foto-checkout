import React, {useContext, useState} from 'react';
import {BasketContext} from "../../context/BasketContext";
import css from './basket.module.css';
import BasketLine from "./BasketLine/BasketLine";
import PriceSummary from "./PriceSummary/PriceSummary.module";

export const Basket = () => {
    const { basket } =useContext(BasketContext);

    const [showBasketLines,toggleShowBasketLines] = useState(false);




    return(
        <div className={`${css['basket-wrapper']} ${showBasketLines && css['extend-it']}`}>

            {
                basket.photoList.length > 0 &&
                <>
                <h2 className={css['basket-title']}>Samenvatting</h2>
                    {!showBasketLines && <p className={css['extend-button']} onClick={()=>toggleShowBasketLines(!showBasketLines)}>[+] gekozen foto's tonen</p>}
                    {showBasketLines && <p className={css['extend-button']} onClick={()=>toggleShowBasketLines(!showBasketLines)}>[-] gekozen foto's verbergen</p>}
                    <section className={`${css['basket-line-wrapper']} ${showBasketLines && css['extended'] }`}>

                        <h3>Foto selectie</h3>
                        {basket.photoList.map(
                            (photo) => <BasketLine key={photo.src} photo={photo} />
                        )}
                    </section>

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