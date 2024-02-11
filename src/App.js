import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


//styles
import './App.css';
import img3 from "./containers/homephoto/home-3.jpg";

//Importing all components/pages
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import About from './containers/About';
import Places from "./containers/projects/world";
import BTS from "./containers/projects/BTS";
import Portraits from "./containers/projects/Portraits";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6g224DN_FldhJxIoCk4VjhDxwODNHEZU",
  authDomain: "maya-finkman-photography.firebaseapp.com",
  databaseURL: "https://maya-finkman-photography.firebaseio.com",
  projectId: "maya-finkman-photography",
  storageBucket: "maya-finkman-photography.appspot.com",
  messagingSenderId: "370588566573",
  appId: "1:370588566573:web:88bbf997d265697fe164a4",
  measurementId: "G-TKMHPP6B59"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/">
           <Home />
          </Route>
        <Route exact path="/places">
           <Places/>
        </Route>
        <Route exact path="/behind-the-scenes">
           <BTS/>
        </Route>
        <Route exact path="/people">
           <Portraits/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
      </Router>
      <Footer/>
    </div>
  )
}

export default App;