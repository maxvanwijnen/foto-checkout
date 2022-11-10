import React, {useContext} from "react";
import PhotoTile from "../PhotoTile/PhotoTile";
import css from './photogrid.module.css';
import {PhotoshootContext} from "../../context/PhotoshootContext";

const photoArray = [
    {  src: "Strandshoot-22-mei-2022-040.jpg", topPick: false },
    { src: "Strandshoot-22-mei-2022-110.jpg", topPick: false },
    { src: "Strandshoot-22-mei-2022-188.jpg", topPick: true },
    { src: "Strandshoot-22-mei-2022-269.jpg", topPick: false },
    { src: "Strandshoot-22-mei-2022-338.jpg", topPick: false },
    { src: "Strandshoot-22-mei-2022-454.jpg", topPick: false },
    { src: "Strandshoot-22-mei-2022-499.jpg",topPick: false },
    { src: "Strandshoot-22-mei-2022-319.jpg", topPick: false },
    { src: "Strandshoot-22-mei-2022-417.jpg", topPick: false },
    { src: "Strandshoot-22-mei-2022-498.jpg", topPick: false },
    { src: "Strandshoot-22-mei-2022-495.jpg", topPick: false },
    { src: "Strandshoot-22-mei-2022-509.jpg", topPick: false },
    { src: "Strandshoot-22-mei-2022-511.jpg", topPick: false },
    { src: "Strandshoot-22-mei-2022-363.jpg", topPick: false },
    { src: "Strandshoot-22-mei-2022-366.jpg", topPick: false },
    { src: "Strandshoot-22-mei-2022-300.jpg", topPick: false },
    { src: "Strandshoot-22-mei-2022-339.jpg", topPick: false },
    { src: "Strandshoot-22-mei-2022-370.jpg", topPick: false }


];





export function PhotoGrid() {

    const {logout} = useContext(PhotoshootContext);


    return (

            <div className={css['photo-grid-wrapper']}>
                <div className={css['info-bar']}> {photoArray.length } foto's geladen</div>
                <div className={css['photo-grid']}>

                    {photoArray.map((photo) => (
                        <PhotoTile

                            photo={photo}
                            key={photo.src}

                        />

                    ))
                    }

                </div>
            </div>

    );


}
export default PhotoGrid;