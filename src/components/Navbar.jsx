import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 font-baloo shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-purple-400 hover:text-purple-300 transition-colors cursor-pointer">
          Neha Kadam
        </div>
        <ul className="flex space-x-8 text-lg">
          <li className="relative group">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-purple-400 transition-colors cursor-pointer hover:text-purple-300"
            >
              Home
            </Link>
            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-purple-400 transition-colors cursor-pointer hover:text-purple-300"
            >
              About
            </Link>
            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-purple-400 transition-colors cursor-pointer hover:text-purple-300"
            >
              Skills
            </Link>
            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-purple-400 transition-colors cursor-pointer hover:text-purple-300"
            >
              Projects
            </Link>
            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-purple-400 transition-colors cursor-pointer hover:text-purple-300"
            >
              Contact
            </Link>
            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
