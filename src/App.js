import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Test } from './pages.js';
import { Home } from './components/Home/Home';


function App() {
  return (
   <>
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="test" element={ <Test /> }/>
       </Routes>
   </>


  );
}

export default App;
