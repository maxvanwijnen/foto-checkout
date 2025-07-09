import React, {useContext, useState} from 'react';
import {BasketContext} from "../../context/BasketContext";
import css from './basket.module.css';
import BasketLine from "./BasketLine/BasketLine";
import PriceSummary from "./PriceSummary/PriceSummary.module";
import {useNavigate} from "react-router";

export const Basket = () => {
    const { basket } =useContext(BasketContext);

    const [showBasketLines, toggleShowBasketLines] = useState(false);

    const navigate = useNavigate();



    return(
        <div className={`${css['basket-wrapper']} ${showBasketLines && css['extend-it']}`}>

            {
                basket.photoList.length > 0 &&
                <>
                {/* Title now moved to header */}
                    {!showBasketLines && <p className={css['extend-button']} onClick={()=>toggleShowBasketLines(!showBasketLines)}>[+] gekozen foto's tonen</p>}
                    {showBasketLines && <p className={css['extend-button']} onClick={()=>toggleShowBasketLines(!showBasketLines)}>[-] gekozen foto's verbergen</p>}
                    
                    {/* Scrollable photos section */}
                    <div className={css['scrollable-content']}>
                        <section className={`${css['basket-line-wrapper']} ${showBasketLines && css['extended'] }`}>
                            <h3>Foto selectie</h3>
                            {basket.photoList.map(
                                (photo) => <BasketLine key={photo.src} photo={photo} />
                            )}
                        </section>
                    </div>
                    
                    {/* Fixed bottom section */}
                    <div className={css['fixed-bottom']}>
                        <PriceSummary />
                        {basket.basketWarning && <div className={css['basket-warning']}>{basket.basketWarning}</div>}
                        <button className={css['next-button']} onClick={()=>navigate('/afdrukken')}>Volgende</button>
                    </div>
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