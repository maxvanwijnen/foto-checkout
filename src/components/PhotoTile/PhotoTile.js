import React, {useContext, useEffect, useState} from "react";
import {BasketContext} from "../../context/BasketContext";
import css from './phototile.module.css';

export const PhotoTile = ({addToBasket, photo}) => {

    const {basket, funcAddPhoto, removePhoto} = useContext(BasketContext);
    const [isSelected, toggleIsSelected] = useState(false);
    const [isMagnified, toggleMagnified] = useState(false);

    const check = basket.photoList.find(photoFromList =>
        photoFromList.src == photo.src
    )


    if (!check && isSelected === true){
        toggleIsSelected(false)
    }
    if (check && isSelected === false){
        toggleIsSelected(true)
    }



    function photoTileAddHandler() {
        funcAddPhoto(photo);
        toggleIsSelected(true);
    }
    function photoTileRemoveHandler() {
        removePhoto(photo);
        toggleIsSelected(false);
    }

    return (
        <div className={css['photo-tile']} key={photo.src}>
            <div className={css['photo-tile-title']}>{photo.name}</div>
            <div className={css['preview-pic-wrapper']}>
                    <img src={photo.src}
                                     alt="preview picture"
                                     className={css['preview-pic']}
                                     onClick={() => funcAddPhoto(photo)}
                />
                {isMagnified &&
                    <div className={css['preview-pic-magnified-wrapper']}>
                        <div className={css['preview-pic-magnified-container']}>
                            <button onClick={()=>toggleMagnified(!isMagnified)} className={css['close-button']}>✖ Sluiten</button>
                            <img src={photo.src}
                                 alt="preview picture"
                                 className={css['preview-pic-magnified']}
                                 onClick={() => funcAddPhoto(photo)}
                            />
                        </div>

                    </div>
                    }



            </div>
            <div>
                <div>{photo.topPick}</div>

            </div>
            <div className={css['button-wrapper']}>
                <button onClick={()=>toggleMagnified(!isMagnified)}>🔎</button>
                {!isSelected && <button onClick={photoTileAddHandler} className={css['add-button']}>Toevoegen</button>}
                {
                    isSelected &&
                    <div className={css['selected-wrapper']}>
                        <button onClick={photoTileRemoveHandler}  className={css['remove-button']}>🗑</button>
                        <div className={css['selected-label']}>✔ Geselecteerd</div>
                    </div>

                }
            </div>

        </div>
    )
}

export default PhotoTile;
