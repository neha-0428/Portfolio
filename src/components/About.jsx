import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-900 text-white font-baloo"
      style={{
        background:
          "linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%)", // Adjusted to a pure black gradient
      }}
    >
      {/* Photo Section */}
      <div className="p-4 flex justify-center">
        <img
          src="/assets/neha.jpeg"
          alt="Neha's profile"
          className="rounded-full w-64 h-64 object-cover shadow-2xl border-4 border-gray-700 transform transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* About Text Section */}
      <div className="md:w-1/2 p-6 text-center md:text-left bg-gray-800 bg-opacity-90 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105">
        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hello! I’m Neha, an enthusiastic MCA student with a solid
          understanding of web development, particularly in React.js and
          Node.js. I am passionate about creating intuitive and dynamic web
          applications. Through projects like "ChatterBox" and "TravelTrek," I
          have gained experience in full-stack development.
        </p>
        <a
          href="#projects"
          className="mt-4 inline-block bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-purple-600"
        >
          View My Projects
        </a>
      </div>
    </div>
  );
}
