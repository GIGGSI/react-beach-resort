import React from 'react';
import './App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import {Route, Switch} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Beach from "./pages/Beach";
import Restaurant from "./pages/Restaurant";
import AboutUsInfo from "./pages/AboutUsInfo";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
    return (
        <>
            <ScrollToTop/>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/rooms' component={Rooms}/>
                <Route exact path='/rooms/:slug' component={SingleRoom}/>
                <Route exact path='/beach' component={Beach}/>
                <Route exact path='/restaurant' component={Restaurant}/>
                <Route exact path='/AboutUsInfo' component={AboutUsInfo}/>
                <Route component={Error}/>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;
