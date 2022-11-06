import react, {createContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router';


export const BasketContext = createContext({});

function BasketContextProvider({children}){
    const [photoList, setPhotoList] = useState([])
    const [totalPrice, setTotalPrice] = useState();

    const [basket,setBasket] = useState({
        photoList:[],
        totalPrice:0
    })

    useEffect(()=>{

        setBasket({
            ...basket,
            photoList: photoList
        })
        calculatePrice();

    },[photoList]);

    useEffect(()=>{

        setBasket({
            ...basket,
            totalPrice: totalPrice
        })


    },[totalPrice]);



    const navigate = useNavigate();

    const calculatePrice = () => {

        if (photoList.length <= 5){
            setTotalPrice(89);
        } else if (photoList.length <= 10){
            setTotalPrice(139);
        } else if (photoList.length <= 15) {
            setTotalPrice(189);
        }

    }


    const addPhoto = (photo) => {
        //als de foto  nog niet was toegevoegd, voeg hem alsnog toe
        if (!photoList.some(e => e.src === photo.src)) {
                setPhotoList(
                    [...photoList, photo]
                )
        }

    }

    const removePhoto = (photo) => {

        const index = photoList.findIndex(pic => pic.src === photo.src);

        //const newPhotoList = photoList;
        photoList.splice(index,1);

        setPhotoList([...photoList]);

    }

    const contextData = {
        basket:basket,
        funcAddPhoto: addPhoto,
        removePhoto:removePhoto
    }


    return (
        <BasketContext.Provider value={contextData}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider;