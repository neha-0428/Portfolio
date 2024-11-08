import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "ChatterBox",
      description: "A real-time chat application built with React and Node.js.",
      image: "/assets/chat_logo.png",
      liveLink: "https://chatterbox-frontend-7jkd.onrender.com",
      githubLink: "https://github.com/neha-0428/ChatterBox",
    },
    {
      title: "TravelTrek",
      description:
        "A travel planning website that helps users explore destinations.",
      image: "/assets/travel_logo.png",
      liveLink: "https://travel-trek-nine.vercel.app/",
      githubLink: "https://github.com/neha-0428/TravelTrek",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white p-14 font-baloo"
    >
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-8">
        My Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 w-full sm:w-128 md:w-112 lg:w-96 xl:w-96"
          >
            <div className="relative w-full h-56">
              <img
                src={project.image}
                alt={project.title}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-t-lg"></div>{" "}
              {/* Darker overlay */}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-center text-gradient bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-center">
                {project.description}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300"
                >
                  View Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
