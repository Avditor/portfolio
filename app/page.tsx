import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="scroll-smooth text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed w-full top-0 z-30 bg-linear-to-b from-black/40 to-black/0 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter bg-linear-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">AVNI</div>
          <nav>
            <ul className="flex space-x-8 text-sm font-semibold tracking-wide">
              <li><a href="#section1" className="hover:text-cyan-300 transition-colors duration-300">Home</a></li>
              <li><a href="#section2" className="hover:text-cyan-300 transition-colors duration-300">Projects</a></li>
              <li><a href="#section3" className="hover:text-cyan-300 transition-colors duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Section 1 */}
      <section
        id="section1"
        className="min-h-screen bg-fixed bg-center bg-cover relative flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-32 pt-32">
          <div className="mb-8 animate-pulse">
            <Image
              src="/avni.jpg"
              alt="Avni Kanishk"
              width={192}
              height={192}
              priority
              className="w-48 h-48 object-cover rounded-full shadow-2xl border-4 border-cyan-300/60 mx-auto ring-8 ring-cyan-300/20"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 drop-shadow-2xl leading-tight bg-linear-to-r from-cyan-200 via-blue-300 to-cyan-200 bg-clip-text text-transparent animate-fade-in">
            AVNI KANISHK
          </h1>
          <p className="text-lg md:text-2xl font-light text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
            Software Developer <span className="text-cyan-300">•</span> Full Stack Engineer <span className="text-cyan-300">•</span> Building impactful digital experiences
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#section2" className="group relative px-8 py-4 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              See Projects
              <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a href="#section3" className="group px-8 py-4 border-2 border-cyan-300/60 text-white font-semibold rounded-lg hover:bg-cyan-300/10 hover:border-cyan-300 transition-all duration-300 backdrop-blur-sm">
              Get in Touch
            </a>
          </div>
        </div>

        {/* decorative SVG divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180 opacity-90">
          <svg className="relative block w-[calc(100%+1px)] h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: 'rgba(0,0,0,0.6)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgba(6,182,212,0.1)', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="url(#grad1)"></path>
          </svg>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="section2"
        className="min-h-screen bg-fixed bg-center bg-cover relative flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/25 via-black/40 to-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto text-center px-6 py-32">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 drop-shadow-2xl bg-linear-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            A selection of recent work showcasing full-stack development, thoughtful design, and production-ready solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border border-cyan-300/20 hover:border-cyan-300/50 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2">
              <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60" alt="Product Dashboard" width={800} height={400} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="font-bold text-xl mb-2 text-cyan-200">Product Dashboard</h3>
              <p className="text-white/70 text-sm leading-relaxed">Realtime analytics, intuitive UX and scalable APIs for enterprise users.</p>
            </div>
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border border-cyan-300/20 hover:border-cyan-300/50 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2">
              <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60" alt="E-commerce Platform" width={800} height={400} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="font-bold text-xl mb-2 text-cyan-200">E‑Commerce Platform</h3>
              <p className="text-white/70 text-sm leading-relaxed">Lightning-fast checkout, admin tools and seamless payment integration.</p>
            </div>
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border border-cyan-300/20 hover:border-cyan-300/50 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2">
              <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60" alt="Design System" width={800} height={400} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="font-bold text-xl mb-2 text-cyan-200">Design System</h3>
              <p className="text-white/70 text-sm leading-relaxed">Modular components, design tokens and consistent developer experience.</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 opacity-90">
          <svg className="relative block w-[calc(100%+1px)] h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: 'rgba(0,0,0,0.6)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgba(6,182,212,0.1)', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path d="M0 0v46.29c47.24 22.65 103.63 35.94 161 39.14 59.57 3.33 118.94-3.71 176-17.7 68-16.62 130.8-45.67 198-59.74 106.76-23.67 203.84-4.93 305 22.1 61.23 16.06 122.49 31.29 185 28.1 54.3-2.78 105.74-18.51 157-34.41V0z" fill="url(#grad2)"></path>
          </svg>
        </div>
      </section>

      {/* Section 3 */}
      <section
        id="section3"
        className="min-h-screen bg-fixed bg-center bg-cover relative flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/45 to-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-32">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 drop-shadow-2xl bg-linear-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            I&apos;m always excited to discuss innovative projects, collaborate with creative teams, and turn ideas into real impact. Reach out and let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:avni@example.com" className="group relative px-8 py-4 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              Send Email
              <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a href="#section1" className="group px-8 py-4 border-2 border-cyan-300/60 text-white font-semibold rounded-lg hover:bg-cyan-300/10 hover:border-cyan-300 transition-all duration-300 backdrop-blur-sm">
              Back to Top
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-2xl">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}