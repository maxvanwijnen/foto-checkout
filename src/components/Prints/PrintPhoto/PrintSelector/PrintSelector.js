import React, {useState} from 'react';
import css from './printselector.module.css'

export const PrintSelector = ({dimensions}) => {
    const [amount, setAmount] = useState(0);

    const increment =  () => {
        setAmount(amount  + 1);
    }

    const decrement =  () => {
        if (amount > 0) {
            setAmount(amount  - 1);
        }
    }




    return  (
        <div className={css['print-selector']}>
            <div>{dimensions}</div>
            <div className={css['button-wrapper']}>
                <button onClick={()=>decrement()}>-</button>
                <input type="text" value={amount} onChange={(e)=>setAmount(parseInt(e.target.value))}   />
                <button onClick={()=>increment()}>+</button>
            </div>

        </div>
    )
}

export default PrintSelector;