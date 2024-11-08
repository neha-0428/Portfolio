import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div id="home" className="flex flex-col font-baloo">
      <Navbar />
      <div
        className="flex-grow bg-black bg-cover bg-center flex flex-col-reverse md:flex-row items-center justify-between relative min-h-screen"
        style={{
          backgroundImage: 'url("/assets/bg2.jpg")',
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col items-start justify-center ml-4 md:ml-20 p-8 relative z-10 max-w-xl text-center md:text-left">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-4xl md:text-5xl font-extrabold mb-4 shadow-lg">
            Hi, I am Neha Kadam
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed shadow-md mb-6">
            A passionate Full Stack Web Developer with a knack for creating
            seamless user experiences. Explore my projects and see how I bring
            ideas to life through innovative web solutions.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 md:space-x-6 text-2xl md:text-3xl justify-center md:justify-start mb-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/_neha_0428/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100026964964558"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/neha-kadam-70a2861a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/neha-0428"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

        {/* Image section */}
        <div
          className="w-full md:w-1/2 h-full bg-cover bg-center md:bg-right md:block"
          style={{ backgroundImage: 'url("/assets/laptop.png")' }}
        ></div>
      </div>
    </div>
  );
}
