import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  Building2,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import Hero3D from "./components/Hero3D";
import { SkillsSection } from "./components/SkillsSection";
import { About } from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* 3D Hero Section */}
      <Hero3D />
      <About />
      <SkillsSection />

      {/* Experience Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-center">Experience</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Current Role */}
            <div className="group">
              <div className="bg-gray-900/90 p-8 rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-all duration-300 border border-gray-800 group-hover:border-blue-500/50">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Building2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        ANS Commerce (Flipkart Group)
                      </h3>
                      <p className="text-gray-400 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Sr. UI Engineer I
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>Sep 2023 - Present</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Lead the development with new themes for kartify, Flipshop and optimized previously built themes for faster load times.",
                    "Optimize UI performance and responsiveness through techniques like code splitting, lazy loading, caching, and asset optimization.",
                    "Led development for multiple projects with Next.js, React.js, JavaScript",
                    "Implemented responsive design using HTML5/CSS3",
                    "Utilized Redux for scalable state management",
                    "Integrated third-party APIs and optimized performance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Previous Role */}
            <div className="group">
              <div className="bg-gray-900/90 p-8 rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-all duration-300 border border-gray-800 group-hover:border-blue-500/50">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg">
                      <Building2 className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        ITT Digital
                      </h3>
                      <p className="text-gray-400 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Front End Developer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>May 2021 - Sep 2023</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Working as a lead developer for an agile handling multiple projects.",
                    "Optimizing UI performance by reducing loading times, minimizing network requests, and improving rendering efficiency is crucial for providing a smooth user experience.",
                    "Created single-page applications using React.js",
                    "Managed version control through Git",
                    "Integrated third-party APIs",
                    "Configured Webpack for optimized performance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Code className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-center" id="projects">
              Featured Projects
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* columbia sportswear Project*/}
            <div className="group bg-gradient-to-br from-gray-800 via-gray-800/95 to-gray-800 p-1 rounded-2xl hover:from-blue-500/20 hover:via-purple-500/20 hover:to-blue-500/20 transition-all duration-500">
              <div className="bg-gray-800 p-8 rounded-2xl">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2 relative group-hover:transform group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute -inset-1  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2070"
                        alt="Alysei Platform"
                        className="rounded-lg shadow-2xl w-full h-[300px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                        Columbia Sportswear
                      </h3>
                      <p className="text-gray-400 text-sm">
                        React • Node.js • MongoDB
                      </p>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                    Columbia Sportswear is a global outdoor apparel and equipment company known for its innovative products, including outerwear, footwear, and accessories. Founded in 1938, the brand emphasizes durability, performance, and technology. Columbia caters to outdoor enthusiasts, offering gear for activities like hiking, skiing, and fishing, with a focus on comfort and protection.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                        Business Networking
                      </span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                        E-commerce
                      </span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                        Real-time Chat
                      </span>
                    </div>
                    <div className="flex gap-6">
                      <a
                        href="https://columbiasportswear.co.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group/link"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="border-b border-transparent group-hover/link:border-blue-400">
                          Visit Website
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secret Wish Project */}
            <div className="group bg-gradient-to-br from-gray-800 via-gray-800/95 to-gray-800 p-1 rounded-2xl hover:from-purple-500/20 hover:via-blue-500/20 hover:to-purple-500/20 transition-all duration-500">
              <div className="bg-gray-800 p-8 rounded-2xl">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2 relative group-hover:transform group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute -inset-1  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015"
                        alt="Zekosoft Website"
                        className="rounded-lg shadow-2xl w-full h-[300px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                      Secret Wish
                      </h3>
                      <p className="text-gray-400 text-sm">
                        React • Tailwind CSS • Framer Motion
                      </p>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                    Secret-Wish is an online store offering a wide range of products, including fragrances, beauty items, and personal care goods. It features a variety of brands and aims to provide customers with quality, affordable options for perfumes and cosmetics. The site focuses on enhancing personal grooming and style.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                        Modern Design
                      </span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                        Animations
                      </span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                        Responsive
                      </span>
                    </div>
                    <div className="flex gap-6">
                      <a
                        href="https://www.secretwish.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group/link"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="border-b border-transparent group-hover/link:border-purple-400">
                          Visit Website
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* American Tourister Project */}
            <div className="group bg-gradient-to-br from-gray-800 via-gray-800/95 to-gray-800 p-1 rounded-2xl hover:from-green-500/20 hover:via-blue-500/20 hover:to-green-500/20 transition-all duration-500">
              <div className="bg-gray-800 p-8 rounded-2xl">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2 relative group-hover:transform group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute -inset-1  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1974"
                        alt="FastFood OS Project"
                        className="rounded-lg shadow-2xl w-full h-[300px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors">
                      American Tourister
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Node.js • React • Tailwind CSS
                      </p>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                    The website "americantourister.in" is the official online store for American Tourister, a global luggage brand. It offers a variety of durable and stylish travel bags, suitcases, backpacks, and accessories. The site showcases different collections, catering to travelers' needs, with a focus on quality, design, and convenience for every journey.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                        SSR
                      </span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                        Performance
                      </span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                        SEO Optimized
                      </span>
                    </div>
                    <div className="flex gap-6">
                      <a
                        href="https://www.americantourister.in/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors group/link"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="border-b border-transparent group-hover/link:border-green-400">
                          Live Demo
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certification */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="group">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-blue-400" />
                Education
              </h2>
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-all duration-300 border border-gray-800 group-hover:border-blue-500/50">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                Bachelor of Engineering (2013-2017)
                </h3>
                <p className="text-gray-400 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-all duration-300 border border-gray-800 group-hover:border-blue-500/50">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                Master of Technology (2018-2020)
                </h3>
                <p className="text-gray-400 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
                </p>
              </div>
            </div>
            <div className="group">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-purple-400" />
                Certification
              </h2>
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-all duration-300 border border-gray-800 group-hover:border-purple-500/50">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  Front End Development
                </h3>
                <p className="text-gray-400 flex items-center gap-2 mb-3">
                  <Building2 className="w-4 h-4" />
                  Coursera
                </p>
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-3 py-1 rounded-full w-fit">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Completed with 94% grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Vikash Tiwari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
