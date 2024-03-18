import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="bg-white text-black py-10" id="about">
            <div className="container mx-auto">
                <h1 className="text-left border-b-2 border-gray-500 font-serif text-3xl font-bold mb-6">About Me</h1>
                <p className="text-lg font-serif text-justify mb-8">
                    I am currently an undergraduate student at the University of Indonesia majoring in Information Systems. My enthusiasm is dedicated to mastering skills in Website and Mobile Development App. Throughout my academic journey, I've actively engaged in coursework and hands-on projects that have not only deepened my understanding of Information Systems but also equipped me with the practical skills needed for effective web and mobile development.
                </p>
                <div className="flex justify-center">
                    <Link to={"https://drive.google.com/file/d/1t_88GRUY2htz-dqQHux6AWVGWfNlOamg/view?usp=sharing"}>
                        <button className="border border-gray-500 text-black hover:text-white hover:bg-gray-500 font-bold py-2 px-4 rounded">
                            View CV
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
