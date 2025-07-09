import React, {useContext, useEffect, useState} from "react";
import {BasketContext} from "../../../context/BasketContext";
import css from './printphoto.module.css';
import { PrintSelector } from './PrintSelector/PrintSelector';

export const PrintPhoto = ({ photo}) => {

    const {basket, funcAddPhoto, removePhoto} = useContext(BasketContext);

    // Extract just the filename from the full path
    const getFileName = (path) => {
        // Handle both URL format and regular file paths
        return path.split('/').pop().split('\\').pop();
    };

    const check = basket.photoList.find(photoFromList =>
        photoFromList.src == photo.src
    )




    return (
        <div className={css['print-photo']} key={photo.src}>
            <div className={css['photo-tile-title']}>{getFileName(photo.src)}</div>
            <div className={css['prints-content-wrapper']}>
                <div className={css['preview-pic-wrapper']}>
                    <img src={photo.src}
                         alt="preview picture"
                         className={css['preview-pic']}
                         onClick={() => funcAddPhoto(photo)}
                    />

                </div>
                <div className={css['options-wrapper']}>
                    <PrintSelector dimensions="10cm x 15cm"/>
                    <PrintSelector dimensions="13cm x 18cm"/>
                    <PrintSelector dimensions="15cm x 20cm"/>
                    <PrintSelector dimensions="20cm x 30cm"/>
                    <PrintSelector dimensions="40cm x 60cm"/>
                    <PrintSelector dimensions="60cm x 90cm"/>
                </div>
            </div>


        </div>
    )
}

export default PrintPhoto;
