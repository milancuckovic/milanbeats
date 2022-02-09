import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
function App(){
    return( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/milanbeats" exact element={<Home/>}></Route>
                    <Route path="/milanbeats/about" element={<About/>}></Route>
                    <Route path="/milanbeats/contact" element={<Contact/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
   
}

export default App;