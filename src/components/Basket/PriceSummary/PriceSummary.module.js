import React, {useContext} from 'react';
import css from './pricesummary.module.css';
import {BasketContext} from "../../../context/BasketContext";


export const PriceSummary = () => {
    const {basket} = useContext(BasketContext);
    return (
        <div className={css['price-summary']}>
            <h3>Prijs samenvatting</h3>
            <table>
                <tr>
                    <th>Aantal foto's</th><th>Prijs</th>
                </tr>
                <tr>
                    <td>{basket.photoList.length}</td><td>{basket.totalPrice} euro</td>
                </tr>

            </table>


        </div>
    )
}

export default PriceSummary;