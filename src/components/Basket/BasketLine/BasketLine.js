import React, {useContext} from 'react';
import {BasketContext} from "../../../context/BasketContext";
import css from "./basketline.module.css"


export const BasketLine = ({photo}) => {

    const {removePhoto} = useContext(BasketContext);
    return (
        <div className={css['basket-line']}>
            <div className={css['title-wrapper']}>
                {photo.name}
            </div>
            <div className={css['options-wrapper']}>
                <img src={photo.src}
                     alt="preview picture"
                     className={css['photo-thumb']}
                />
                <button className={css['remove-button']} onClick={()=>removePhoto(photo)}>                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default BasketLine;