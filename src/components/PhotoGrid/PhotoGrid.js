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
];





export function PhotoGrid() {

    const {logout} = useContext(PhotoshootContext);

    return (

            <div className={css['photo-grid']}>
                <button onClick={logout}>Uitloggen</button>
                {photoArray.map((photo) => (
                    <PhotoTile

                        photo={photo}
                        key={photo.src}

                    />

                ))
                }

            </div>



    );


}
export default PhotoGrid;