import react, {createContext, useState, useEffect} from 'react';

import { useNavigate } from "react-router";
import axios from 'axios';

export const PhotoshootContext = createContext({});

function PhotoshootContextProvider({children}){
    const [auth, setAuth] = useState({
        isAuth:false,
        status:'pending'
    });

    const [imageList, setImageList] = useState([]);
    const [customerData, setCustomerData] = useState({});
    const [code, setCode] = useState([]);


    const [photoshoot, setPhotoshoot] =  useState({
        clientId:123,
        photoshootDate:20220522,
        giftcard:null,
        packagePrices:[89,139,189],
        photoPrice:15
    });


    const navigate = useNavigate();


    useEffect(()=>{

        if (localStorage.getItem(code))
        {
            login(localStorage.getItem(code));
        }
        else {
            setAuth({
                isAuth:false,
                status: 'done'
            })
        }

    },[]);

    useEffect(()=>{
        console.log(imageList)
        try {
            if (imageList.length > 0){
                setAuth({
                    ...auth,
                    isAuth: true
                })
            }
        }
        catch {
            console.log();
        }

    },[imageList])


    const getImageData = async (enteredCode) => {
        try {
            const response = await axios.get(`https://dev4.maxvanwijnen.nl/getImages.php?id=${enteredCode}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };



    const login = async (enteredCode) => {
        const imageData = await getImageData(enteredCode);
        console.log(imageData)
        setCode(enteredCode);
        setImageList(imageData.images);
        setPhotoshoot({...photoshoot,packagePrices: [imageData.customer.basic,imageData.customer.premium, imageData.customer.deluxe]})
        setCustomerData(imageData.customer);
        // Doe iets met de afbeeldingsgegevens, bijvoorbeeld opslaan in de lokale staat
    };

   /* const login = (enteredCode) => {

        if (enteredCode == photoshoot.clientId){
            localStorage.setItem('clientId',enteredCode);
            setAuth({
                ...auth,
                isAuth: true
            })
        }




    }*/
    const logout = () => {


            localStorage.removeItem('clientId');
            setAuth({
                ...auth,
                isAuth: false
            })



    }
    const contextData = {
        ...photoshoot,
        isAuth:auth.isAuth,
        login,
        logout,
        imageList,
        customerData
    }



    return (
        <PhotoshootContext.Provider value={contextData}>

            {auth.status === 'pending' ? <p>Laden...</p> : children}
        </PhotoshootContext.Provider>
    )
}

export default PhotoshootContextProvider;