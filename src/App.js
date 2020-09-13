import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//styles
import './App.css';

//Importing all components/pages
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import About from './containers/About';
import Projects from "./containers/projects/Projects";
import World from "./containers/world/world";
import Colors from "./containers/projects/Colors";
import BTS from "./containers/projects/BTS";
import Portraits from "./containers/projects/Portraits";
import Shakespeare from "./containers/projects/Shakespeare";
import Resist from "./containers/projects/Resist";
import Paris from "./containers/world/Paris";
import Israel from './containers/world/Israel';
import LA from './containers/world/LA';
import MSM from './containers/world/msm';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use

var firebaseConfig = {
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
        <Route exact path="/projects">
           <Projects />
          </Route>
        <Route exact path="/world">
           <World/>
        </Route>
        <Route exact path="/colors">
           <Colors/>
        </Route>
        <Route exact path="/behind-the-scenes">
           <BTS/>
        </Route>
        <Route exact path="/portraits">
           <Portraits/>
        </Route>
        <Route exact path="/shakespeare-in-shadows">
          <Shakespeare/>
        </Route>
        <Route exact path="/resist">
          <Resist/>
        </Route>
        <Route exact path="/paris">
          <Paris/>
        </Route>
        <Route exact path="/israel">
          <Israel/>
        </Route>
        <Route exact path="/los-angeles">
          <LA/>
        </Route>
        <Route exact path="/mont-st-michel">
          <MSM/>
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