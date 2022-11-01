import React from "react";
import './Content.css'

import {Outlet} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";


const Content = () => {
    return (
        <>
            <Header/>
            <div className={'content'}><Outlet/></div>
            <Footer/>
        </>




    )
}
export default Content