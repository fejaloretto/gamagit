import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Repositories from "./Pages/Repositories";
import Home from "./Pages/Home";


export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>} />    
                <Route path='/repositories' element={<Repositories/>} />
            </Routes>
        </BrowserRouter>
    )
}

//<Route path='/' exact element={<Home/>}>