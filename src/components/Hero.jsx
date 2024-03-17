import React from "react";
import Image from "../assets/sulthan-removedbg.png";

const Hero = () => {
    return (
        <div className="bg-black text-white flex flex-col items-center justify-center sm:flex-row">
            <div className="text-center sm:text-left sm:ml-20 sm:mr-10">
                <h1 className="text-2xl sm:text-4xl font-bold mb-4 font-serif">
                    Hi, I'm Abdillah Sulthan Naufal Panggabean!
                </h1>
                <p className="text-sm sm:text-lg font-serif">
                    I am currently an undergraduate student at the University of Indonesia majoring in Information Systems. My enthusiasm is dedicated to mastering skills in Website and Mobile Development App.
                </p>
            </div>
            <img src={Image} alt="" className="my-4 sm:my-0 sm:ml-10 sm:mr-20" style={{ maxWidth: "100%", height: "auto" }}/>
        </div>
    );
};

export default Hero;
