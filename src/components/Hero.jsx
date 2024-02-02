import React from "react";
import Image from "../assets/sulthan-removedbg.png";

const Hero = () => {
    return (
        <div className="bg-black text-white flex items-center justify-center">
            <div className="flex justify-between items-center">
                <div className="text-left ml-20">
                    <h1 className="text-2xl sm:text-4xl font-bold mb-4 font-serif">
                        Hi, I'm Abdillah Sulthan Naufal Panggabean!
                    </h1>
                    <p className="text-sm sm:text-lg font-serif">
                        I am currently an undergraduate student at the University of Indonesia majoring in Information Systems. My enthusiasm is dedicated to mastering skills in Website and Mobile Development App.
                    </p>
                </div>
                <img src={Image} alt="" className=" mr-20"/>
            </div>
        </div>
    );
};

export default Hero;