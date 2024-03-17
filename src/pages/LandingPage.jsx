import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import About from "../components/About";
import Project from "../components/Project";

const LandingPage = () =>  {
    return (
        <div>
            <Hero></Hero>
            <Project></Project>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;