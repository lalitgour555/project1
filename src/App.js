import logo from './logo.svg';
import './App.css';
import Home from './Home';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';

import {

  BrowserRouter as router ,
  Route,
  Switch,
  Routes
} from "react-router-dom";
import Main from './component/Main';



function App() {

  
  return (

    
   
   


    <div className="App">
      <Header/><Main/><Footer/>

      Next page
        <Header/>

       <Home/>
 <Footer/> 


       </div>
    
  );
}

export default App;
