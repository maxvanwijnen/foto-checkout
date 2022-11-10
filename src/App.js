import logo from './logo.svg';
import {useContext} from "react";
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Test } from './pages.js';
import { Home } from './components/Home/Home';
import { LoginForm } from './components/LoginForm/LoginForm';
import {PhotoshootContext} from "./context/PhotoshootContext";
import { Prints } from './components/Prints/Prints';



function App() {
    const {isAuth, login} = useContext(PhotoshootContext);


    console.log('asdadad')
    console.log(isAuth)

  return (
   <>
       <Routes>
           {isAuth ?
               <Route path="/" element={<Home />}/> :
               <Route path="/" element={<LoginForm />}/>
           }

           <Route path="/afdrukken" element={ <Prints /> }/>
       </Routes>
   </>


  );
}

export default App;
