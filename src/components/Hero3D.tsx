"use client";

import { Github, Linkedin, Mail, Phone, MapPin, FileText } from "lucide-react";

export default function Hero3D() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* 3D Model Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/squarechipsfallinginplace-eb218e836b843f2d67469de44b9dc4d5/"
          width="100%"
          height="100%"
          title="Rubik's Cube 3D Model"
          className=""
        ></iframe>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-5 z-10"></div>

      {/* Content Overlay */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center items-center p-8 md:p-16">
        <div className="max-w-[37rem] mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-slideDown">
            Hi, I’m Vikash Tiwari
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-slideUp">
            Frontend Developer Specializing in Modern Web Solutions
          </p>
          <p className="text-gray-400 mb-8 animate-fadeIn">
            Delivering high-quality, scalable, and user-centric web applications
            using cutting-edge technologies.
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-300 animate-slideUp">
            <a
              href="mailto:tvikash964@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors transform hover:scale-110 duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="tel:8839643893"
              className="flex items-center gap-2 hover:text-white transition-colors transform hover:scale-110 duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>Call</span>
            </a>
            <a
              href="https://github.com/Vikasht213"
              target="blank"
              className="flex items-center gap-2 hover:text-white transition-colors transform hover:scale-110 duration-200"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vikash-tiwari-16490514a"
              className="flex items-center gap-2 hover:text-white transition-colors transform hover:scale-110 duration-200"
              target="blank"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-5 h-5" />
              <span>Gurugram</span>
            </div>
            <a
              href="https://drive.google.com/file/d/1anIkw5XEZ-Gm6NCCs2EYEccY2tIJqCZl/view"
              className="flex items-center gap-2 hover:text-white transition-colors transform hover:scale-110 duration-200"
              target="blank"
            >
              <FileText className="w-5 h-5"/>
              <span>Resume</span>
            </a>
          </div>

          {/* CTA Button */}
          <a href="#projects" className="projectss">
          <button className="mt-12 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors animate-fadeIn">
            Explore My Projects
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}
