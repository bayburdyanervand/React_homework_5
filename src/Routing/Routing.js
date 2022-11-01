import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../components/main/Main";
import About from "../components/about/About";
import Content from "../components/content/Content";
import Testimonial from "../components/testimonial/Testimonial";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Content/>}>
                    <Route path={''} element={<Main/>}/>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'testimonial'} element={<Testimonial/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
export default Routing