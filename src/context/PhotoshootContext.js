import react, {createContext, useState, useEffect} from 'react';

import { useNavigate } from "react-router";

export const PhotoshootContext = createContext({});

function PhotoshootContextProvider({children}){
    const [auth, setAuth] = useState({
        isAuth:false,
        status:'pending'
    });

    const [photoshoot, setPhotoshoot] =  useState({
        clientId:123,
        photoshootDate:20220522,
        giftcard:null,
        packagePrices:[89,139,189],
        photoPrice:15
    });


    const navigate = useNavigate();


    useEffect(()=>{

        if (localStorage.getItem('clientId') == photoshoot.clientId)
        {
            setAuth({
                isAuth:true,
                status: 'done'
            })
        }
        else {
            setAuth({
                isAuth:false,
                status: 'done'
            })
        }

    },[]);





    const login = (enteredCode) => {

        if (enteredCode == photoshoot.clientId){
            localStorage.setItem('clientId',enteredCode);
            setAuth({
                ...auth,
                isAuth: true
            })
        }


    }
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
        logout
    }



    return (
        <PhotoshootContext.Provider value={contextData}>

            {auth.status === 'pending' ? <p>Laden...</p> : children}
        </PhotoshootContext.Provider>
    )
}

export default PhotoshootContextProvider;