import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 75 },
    { name: "JAVA", level: 80 },
    { name: "React", level: 80 },
    { name: "SQL", level: 90 },
    { name: "MongoDB", level: 80 },
  ];

  return (
    <div
      id="skills"
      className="flex flex-col items-center p-14 bg-gradient-to-r from-gray-900 via-gray-900 to-black text-white font-baloo"
    >
      {/* Title */}
      <h2 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 shadow-md">
        My Skills
      </h2>

      {/* Skills Section */}
      <div className="w-full max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="mb-6 transform transition-transform duration-500 hover:scale-105"
          >
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold">{skill.name}</span>
              <span className="text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4 shadow-inner">
              <div
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-4 rounded-full shadow-md transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
