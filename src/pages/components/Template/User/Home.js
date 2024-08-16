import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Main1/Navbar";
import Footer from "../Main1/Footer";


export default function Home1() {
    return (
        <>
        <Navbar/>
        
        <Outlet />
        <Footer/>
            
        </>
    )
}