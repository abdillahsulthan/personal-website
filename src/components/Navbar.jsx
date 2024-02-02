import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const scrollToAbout = () => {
        scroll.scrollTo(600); // Ganti dengan nilai yang sesuai dengan tinggi bagian About Anda
    };

    return (
        <div>
            <nav className="nav bg-black font-semibold text-white flex items-center justify-between">
                <div className="text-white font-bold font-serif ml-20">
                    <span className="text-xl">Abdillah Sulthan.</span>
                </div>
                <ul className="flex mr-20">
                    <li className="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100 hover:text-gray-500 duration-200 cursor-pointer">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li className="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100 hover:text-gray-500 duration-200 cursor-pointer">
                        <Link
                            activeClass="active"
                            to="project"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Project
                        </Link>
                    </li>
                    <li className="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100 hover:text-gray-500 duration-200 cursor-pointer">
                        <Link
                            activeClass="active"
                            to="footer"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
