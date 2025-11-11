import React from 'react';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#c6d8e2] to-[#b0c8d2] text-white">
      {/* Header */}
      <header className="flex justify-center items-center px-12 py-6 absolute w-full top-0 z-20">
        <nav>
          <ul className="flex space-x-10 text-base font-semibold">
            <li><a href="#home" className="hover:opacity-80">Home</a></li>
            <li><a href="#about" className="hover:opacity-80">About</a></li>
            <li><a href="#projects" className="hover:opacity-80">Projects</a></li>
            <li><a href="#skills" className="hover:opacity-80">Skills</a></li>
            <li><a href="#experience" className="hover:opacity-80">Experience</a></li>
            <li><a href="#contact" className="hover:opacity-80">Contact</a></li>
            <li><a href="#blog" className="hover:opacity-80">Blog</a></li>
            <li><a href="#github" className="hover:opacity-80">GitHub</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <img
          src="/avni.jpg" // Replace with your image path
          alt="Avni Kanishk"
          className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-white mb-6"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-4 text-white drop-shadow-lg">
          AVNI KANISHK
        </h1>
        <p className="text-lg md:text-xl font-medium text-white/90 max-w-2xl">
          Software Developer | Full Stack Engineer | Building Impactful Digital Experiences
        </p>
      </main>

      {/* Social Icons */}
      <div className="absolute top-6 right-12 flex space-x-4 text-white/90">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:opacity-70">
          <i className="fab fa-github text-xl"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:opacity-70">
          <i className="fab fa-linkedin text-xl"></i>
        </a>
        <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:opacity-70">
          <i className="fab fa-twitter text-xl"></i>
        </a>
      </div>
    </div>
  );
}