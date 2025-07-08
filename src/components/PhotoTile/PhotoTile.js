import React, {useContext, useEffect, useState} from "react";
import {BasketContext} from "../../context/BasketContext";
import {PhotoshootContext} from "../../context/PhotoshootContext";
import css from './phototile.module.css';

export const PhotoTile = ({addToBasket, photo}) => {

    const {basket, funcAddPhoto, removePhoto} = useContext(BasketContext);
    const {imageList} = useContext(PhotoshootContext);
    const [isSelected, toggleIsSelected] = useState(false);
    const [isMagnified, toggleMagnified] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    // Handle keyboard navigation when magnified view is open
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (isMagnified) {
                if (event.key === 'ArrowLeft') {
                    goToPreviousPhoto();
                } else if (event.key === 'ArrowRight') {
                    goToNextPhoto();
                } else if (event.key === 'Escape') {
                    toggleMagnified(false);
                }
            }
        };

        // Add event listener when component mounts or isMagnified changes
        document.addEventListener('keydown', handleKeyDown);
        
        // Clean up event listener when component unmounts or isMagnified changes
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMagnified, currentPhotoIndex]);

    const check = basket.photoList.find(photoFromList =>
        photoFromList.src == photo.src
    )


    if (!check && isSelected === true){
        toggleIsSelected(false)
    }
    if (check && isSelected === false){
        toggleIsSelected(true)
    }

    // Find the index of the current photo in the imageList
    useEffect(() => {
        if (imageList && imageList.length > 0) {
            const index = imageList.findIndex(img => img.src === photo.src);
            if (index !== -1) {
                setCurrentPhotoIndex(index);
            }
        }
    }, [photo, imageList]);



    function photoTileAddHandler() {
        funcAddPhoto(photo);
        toggleIsSelected(true);
    }
    function photoTileRemoveHandler() {
        removePhoto(photo);
        toggleIsSelected(false);
    }

    function goToPreviousPhoto() {
        if (imageList && imageList.length > 0) {
            const newIndex = currentPhotoIndex > 0 ? currentPhotoIndex - 1 : imageList.length - 1;
            setCurrentPhotoIndex(newIndex);
        }
    }

    function goToNextPhoto() {
        if (imageList && imageList.length > 0) {
            const newIndex = currentPhotoIndex < imageList.length - 1 ? currentPhotoIndex + 1 : 0;
            setCurrentPhotoIndex(newIndex);
        }
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
                            <button onClick={()=>toggleMagnified(!isMagnified)} className={css['close-button']} aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                            <div className={css['navigation-controls']}>
                                <button onClick={goToPreviousPhoto} className={css['nav-arrow']} aria-label="Previous photo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="15 18 9 12 15 6"></polyline>
                                    </svg>
                                </button>
                                <div className={css['magnified-image-container']}>
                                    <img src={imageList && imageList.length > 0 ? imageList[currentPhotoIndex].src : photo.src}
                                         alt="preview picture"
                                         className={css['preview-pic-magnified']}
                                    />
                                    {imageList && imageList.length > 0 ? (
                                        // Check if the current photo is in the basket
                                        basket.photoList.find(p => p.src === imageList[currentPhotoIndex].src) ? (
                                            <button 
                                                onClick={() => removePhoto(imageList[currentPhotoIndex])}
                                                className={`${css['add-to-basket-button']} ${css['added']}`}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                                <span>Toegevoegd</span>
                                            </button>
                                        ) : (
                                            <button 
                                                onClick={() => funcAddPhoto(imageList[currentPhotoIndex])}
                                                className={css['add-to-basket-button']}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="16"></line>
                                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                                </svg>
                                                <span>Toevoegen</span>
                                            </button>
                                        )
                                    ) : (
                                        <button 
                                            onClick={() => funcAddPhoto(photo)}
                                            className={isSelected ? `${css['add-to-basket-button']} ${css['added']}` : css['add-to-basket-button']}
                                        >
                                            {isSelected ? (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                    </svg>
                                                    <span>Toegevoegd</span>
                                                </>
                                            ) : (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="12" y1="8" x2="12" y2="16"></line>
                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                    </svg>
                                                    <span>Toevoegen</span>
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                                <button onClick={goToNextPhoto} className={css['nav-arrow']} aria-label="Next photo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    }



            </div>
            <div>
                <div>{photo.topPick}</div>

            </div>
            <div className={css['button-wrapper']}>
                <button onClick={()=>toggleMagnified(!isMagnified)} className={css['magnify-button']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                </button>
                {!isSelected && 
                    <button onClick={photoTileAddHandler} className={css['grid-add-button']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        <span>Toevoegen</span>
                    </button>
                }
                {
                    isSelected &&
                    <div className={css['selected-wrapper']}>
                        <button onClick={photoTileRemoveHandler} className={css['remove-button']}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </button>
                        <div className={css['selected-label']}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>Geselecteerd</span>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

export default PhotoTile;
