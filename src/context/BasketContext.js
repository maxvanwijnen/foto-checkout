import react, {createContext, useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router';
import {PhotoshootContext} from "./PhotoshootContext";


export const BasketContext = createContext({});



function BasketContextProvider({children}){
    const [photoList, setPhotoList] = useState([])
    const [totalPrice, setTotalPrice] = useState();
    const {packagePrices, photoPrice} = useContext(PhotoshootContext);


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
        const remainder = photoList.length%5;
        const closestPackage = (photoList.length-remainder)/5;


        let basketWarning = null;
        console.log('ooooooooo')
        console.log(totalPrice)
        console.log(closestPackage)
        console.log(packagePrices[closestPackage]);
        console.log('ooooooooo')
        if (totalPrice > packagePrices[closestPackage]){
            basketWarning = 'Let op! het is goedkoper te upgraden het volgende paket';
        }
        setBasket({
            ...basket,
            totalPrice: totalPrice,
            basketWarning: basketWarning
        })


    },[totalPrice]);



    const navigate = useNavigate();

    const calculatePrice = () => {


        if (photoList.length <= 5){
            console.log(packagePrices[0])
            setTotalPrice(packagePrices[0]);
        } else {
            const remainder = photoList.length%5;

            if (photoList.length <= 15){
                //exacte pakket is gekozen
                if(remainder == 0){
                    setTotalPrice(packagePrices[(photoList.length/5)-1])
                }
                else {
                    const closestPackage = (photoList.length-remainder)/5;
                    const extraCosts = remainder * photoPrice;
                    setTotalPrice(packagePrices[closestPackage-1] + extraCosts);
                }
            }


            if (photoList.length > 15){
                const singlePhotos = photoList.length-15
                const extraCosts = singlePhotos * photoPrice;
                setTotalPrice(packagePrices[2]+extraCosts);
            }


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