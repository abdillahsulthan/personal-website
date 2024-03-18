import React, { useState, useEffect } from "react";
import Image from "../../assets/sulthan-removedbg.png";
import "./Hero.css";

const Hero = () => {
    const [text, setText] = useState("");
    const roles = ["Mobile Developer", "Front End Developer", "Back End Developer"];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        let currentIndex = 0;
        let interval = setInterval(() => {
            if (currentIndex <= roles[roleIndex].length) {
                setText(roles[roleIndex].substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setRoleIndex((roleIndex + 1) % roles.length);
                    setText("");
                }, 1000);
            }
        }, 80);

        return () => clearInterval(interval);
    }, [roleIndex]);

    return (
        <div className="bg-white text-black flex flex-col items-center justify-center sm:flex-row">
            <div className="text-center sm:text-left sm:ml-20 sm:mr-10">
                <h1 className="text-3xl sm:text-5xl font-bold mb-4 font-serif">
                    Hello, I am <span className="gradient-text">Abdillah Sulthan!</span>
                </h1>
                <p className="text-xl sm:text-2xl font-serif">
                    {text}
                    <span className="blink">|</span>
                </p>
            </div>
            <img src={Image} alt="" className="my-4 sm:my-0 sm:ml-10 sm:mr-20" style={{ maxWidth: "100%", height: "auto" }}/>
        </div>
    );
};
   
export default Hero;
