import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import React from "react";
import Content from "./components/content/Content";
import {Route,Routes} from "react-router-dom";
import Routing from "./Routing/Routing";


function App() {
    return (
        <div className={'wrapper'}>
            {/*<Header/>*/}
            {/*<Content/>*/}
            {/*<Footer/>*/}
            <Routing/>
        </div>
    );
}

export default App;
