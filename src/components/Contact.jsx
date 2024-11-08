import React, { useState } from "react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white font-baloo"
    >
      {/* Title */}
      <h2 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
        Contact Me
      </h2>

      {/* Contact Form or Success Message */}
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105">
        {!formSubmitted ? (
          // If the form is not submitted, show the form
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-80 transform transition-all duration-300"
              >
                Send
              </button>
            </div>
          </form>
        ) : (
          // After form is submitted, show success message
          <div className="text-center text-lg text-gray-300">
            <p className="mb-4">
              Thank you for reaching out! I will get back to you as soon as
              possible.
            </p>
            <p className="text-sm text-gray-400">
              Alternatively, you can reach me at{" "}
              <a
                href="mailto:nehakadam3007@gmail.com"
                className="text-purple-400 hover:text-pink-500 hover:underline"
              >
                nehakadam3007@gmail.com
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Alternative contact info */}
      {!formSubmitted && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Alternatively, you can reach me at{" "}
            <a
              href="mailto:nehakadam3007@gmail.com"
              className="text-purple-400 hover:text-pink-500 hover:underline"
            >
              nehakadam3007@gmail.com
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
