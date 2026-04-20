"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';


export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Entrance animations with IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.section-content').forEach((el) => observer.observe(el));

    // Parallax: subtle background position shift on scroll
    const onScroll = () => {
      document.querySelectorAll('section').forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const speed = 0.18; // lower = subtler
        const pos = Math.round(rect.top * speed);
        // modify inline style for background position
        (sec as HTMLElement).style.backgroundPosition = `center ${pos}px`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);


  return (
    <div className="scroll-smooth text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed w-full top-0 z-30 bg-linear-to-b from-black/60 via-black/40 to-transparent backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <nav>
            <ul className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide">
              <li><a href="#section1" className="hover:text-cyan-300 transition-colors duration-300">Home</a></li>
              <li><a href="#section2" className="hover:text-cyan-300 transition-colors duration-300">Projects</a></li>
              <li><a href="#section3" className="hover:text-cyan-300 transition-colors duration-300">Contact</a></li>
            </ul>
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
            <div className={`absolute right-4 top-16 w-48 bg-black/70 backdrop-blur-lg rounded-lg py-2 shadow-lg transition-all ${menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} md:hidden`}>
              <a href="#section1" className="block px-4 py-2 hover:bg-white/5" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#section2" className="block px-4 py-2 hover:bg-white/5" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#section3" className="block px-4 py-2 hover:bg-white/5" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Cards Section - improved placement and spacing */}
      <div className="flex flex-col items-center gap-6 mt-28 mb-10 px-4">
        {/* Quick Tip Card */}
        <div className="card w-full max-w-md bg-yellow-100 text-yellow-800 rounded-xl shadow-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-yellow-200/90 cursor-pointer">
          <h3 className="font-bold text-lg mb-2">Quick Tip</h3>
          <p className="text-base m-0">
            Use <span className="font-semibold">Ctrl + Shift + P</span> in VS Code to access all commands instantly!
          </p>
        </div>
        {/* Motivational Quote Card */}
        <div className="card w-full max-w-md bg-sky-100 text-sky-700 rounded-xl shadow-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-sky-200/90 cursor-pointer">
          <h3 className="font-bold text-lg mb-2">Motivational Quote</h3>
          <p className="text-base italic m-0">
            "Success is the sum of small efforts, repeated day in and day out."
          </p>
        </div>
        {/* Tech Stack Card */}
        <div className="card w-full max-w-md bg-slate-100 text-slate-900 rounded-xl shadow-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-slate-200/90 cursor-pointer">
          <h3 className="font-bold text-lg mb-2">Tech Stack</h3>
          <ul className="flex flex-wrap gap-3 justify-center p-0 m-0 list-none">
            <li className="bg-sky-200 text-sky-700 rounded-lg px-3 py-1 font-medium transition-all duration-200 transform hover:scale-110 hover:bg-sky-300/90 hover:shadow-md cursor-pointer">React</li>
            <li className="bg-indigo-200 text-indigo-800 rounded-lg px-3 py-1 font-medium transition-all duration-200 transform hover:scale-110 hover:bg-indigo-300/90 hover:shadow-md cursor-pointer">Next.js</li>
            <li className="bg-green-200 text-green-800 rounded-lg px-3 py-1 font-medium transition-all duration-200 transform hover:scale-110 hover:bg-green-300/90 hover:shadow-md cursor-pointer">TypeScript</li>
            <li className="bg-red-200 text-red-700 rounded-lg px-3 py-1 font-medium transition-all duration-200 transform hover:scale-110 hover:bg-red-300/90 hover:shadow-md cursor-pointer">Tailwind CSS</li>
          </ul>
        </div>
      </div>

      <section
        id="section1"
        className="min-h-screen bg-fixed bg-center bg-cover relative flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1639762681033-6461ffad8d80?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-32 pt-32">
          <div className="mb-8 animate-pulse section-content opacity-0 -translate-y-8">
            <Image
              src="/avni.jpg"
              alt="Avni Kanishk"
              width={192}
              height={192}
              priority
              className="w-48 h-48 object-cover rounded-full shadow-2xl border-4 border-cyan-300/60 mx-auto ring-8 ring-cyan-300/20"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-2xl leading-tight text-white animate-fade-in section-content opacity-0 -translate-y-8">
            AVNI KANISHK
          </h1>
          <p className="text-lg md:text-xl font-light text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed section-content opacity-0 -translate-y-8">
            Full Stack Software Engineer crafting high-performance, user-centric digital solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 section-content opacity-0 -translate-y-8">
            <a href="#section2" className="btn btn-primary">
              See Projects
            </a>
            <a href="#section3" className="btn btn-secondary">
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
            "url('/github.png')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/25 via-black/40 to-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto text-center px-6 py-32">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white section-content opacity-0 -translate-y-8">
            Work & Projects
          </h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light section-content opacity-0 -translate-y-8">
            Select projects demonstrating full-stack expertise, scalable architecture, and attention to detail.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border border-cyan-300/20 hover:border-cyan-300/50 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 section-content opacity-0 -translate-y-8">
              <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60" alt="Product Dashboard" width={800} height={400} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-white">Product Dashboard</h3>
              <p className="text-white/60 text-sm leading-relaxed">Realtime analytics platform with intuitive UI and production-grade APIs.</p>
            </div>
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border border-cyan-300/20 hover:border-cyan-300/50 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 section-content opacity-0 -translate-y-8">
              <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60" alt="E-commerce Platform" width={800} height={400} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-white">E-Commerce Platform</h3>
              <p className="text-white/60 text-sm leading-relaxed">Fast, secure checkout flow with comprehensive inventory and order management.</p>
            </div>
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border border-cyan-300/20 hover:border-cyan-300/50 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 section-content opacity-0 -translate-y-8">
              <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60" alt="Design System" width={800} height={400} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-white">Design System</h3>
              <p className="text-white/60 text-sm leading-relaxed">Reusable component library with design tokens for consistent, scalable UX.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}

      <section
        id="experience"
        className="min-h-screen bg-fixed bg-center bg-cover relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/60 to-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white animate-fadein-up">
            Experience
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed font-light animate-fadein-up delay-100">
            Selected roles and internships.
          </p>

          <div className="space-y-8 w-full flex flex-col items-center">
            {/* Experience Card 1 */}
            <div className="group bg-white/10 backdrop-blur-2xl rounded-2xl p-7 border border-cyan-300/20 shadow-xl transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl animate-fadein-up delay-200 w-full max-w-2xl relative">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center border border-cyan-200/20">
                  <a href="https://origincore.com" target="_blank" rel="noopener noreferrer" title="OriginCore Website">
                    <Image src="/origincore-logo.png" alt="OriginCore logo" width={80} height={80} className="object-contain" />
                  </a>
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold text-white">Full Stack Developer — OriginCore</h3>
                    <a href="https://origincore.com" target="_blank" rel="noopener noreferrer" className="ml-1 inline-block align-middle" title="Visit OriginCore">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-300 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" /></svg>
                    </a>
                  </div>
                  <p className="text-white/60 text-sm mb-2">January 2026 — Present • Remote</p>
                  <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
                    <li>Developing full-stack applications using modern technologies.</li>
                    <li>Collaborating on scalable solutions and improving user experience.</li>
                    <li>Participating in agile development processes and code reviews.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience Card 2 */}
            <div className="group bg-white/10 backdrop-blur-2xl rounded-2xl p-7 border border-cyan-300/20 shadow-xl transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl animate-fadein-up delay-300 w-full max-w-2xl relative">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center border border-cyan-200/20">
                  <a href="https://oolka.com" target="_blank" rel="noopener noreferrer" title="Oolka Website">
                    <Image src="/oolka-logo.png" alt="Oolka logo" width={80} height={80} className="object-contain" />
                  </a>
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold text-white">Software Developer Intern — Oolka</h3>
                    <a href="https://oolka.com" target="_blank" rel="noopener noreferrer" className="ml-1 inline-block align-middle" title="Visit Oolka">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-300 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" /></svg>
                    </a>
                  </div>
                  <p className="text-white/60 text-sm mb-2">July 2024 — October 2024 • Remote</p>
                  <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
                    <li>Implemented backend endpoints in Node.js + Express supporting user onboarding and analytics.</li>
                    <li>Built React components for admin dashboard, improving task completion time by 20%.</li>
                    <li>Wrote unit and integration tests and participated in code reviews and sprint planning.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vertical Timeline Connector (optional, for visual flow) */}
            <div className="hidden sm:block absolute left-1/2 top-32 bottom-32 w-1 bg-linear-to-b from-cyan-400/30 via-cyan-300/10 to-transparent rounded-full -z-10" style={{transform: 'translateX(-50%)'}} />
          </div>
        </div>

      {/* Smooth Transition Divider */}
      <div className="w-full flex justify-center items-center py-8 bg-linear-to-b from-transparent via-cyan-400/10 to-transparent">
        <div className="h-2 w-32 rounded-full bg-linear-to-r from-cyan-400/40 via-blue-400/40 to-cyan-400/40 blur-sm opacity-70" />
      </div>
      </section>

      {/* Section 3 */}
      <section id="section3" className="tech-scene">
        <div className="background-grid"></div>
        <div className="particles"></div>
        <div className="cubes-container">
          <div className="glass-cube cube-1">
            <div className="cube-face front flex items-center justify-center">
              <Image src="/github.png" alt="GitHub Logo" width={64} height={64} />
            </div>
            <div className="cube-face back"></div>
            <div className="cube-face left"></div>
            <div className="cube-face right"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
          <div className="glass-cube cube-2">
            <div className="cube-face front flex items-center justify-center">
              <Image src="/logos/linkedin.svg" alt="LinkedIn Logo" width={64} height={64} />
            </div>
            <div className="cube-face back"></div>
            <div className="cube-face left"></div>
            <div className="cube-face right"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
          <div className="glass-cube cube-3">
            <div className="cube-face front flex items-center justify-center">
              <Image src="/logos/leetcode.svg" alt="LeetCode Logo" width={64} height={64} />
            </div>
            <div className="cube-face back"></div>
            <div className="cube-face left"></div>
            <div className="cube-face right"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
          <div className="glass-cube cube-4">
            <div className="cube-face front flex items-center justify-center">
              <Image src="/logos/twitter.svg" alt="Twitter Logo" width={64} height={64} />
            </div>
            <div className="cube-face back"></div>
            <div className="cube-face left"></div>
            <div className="cube-face right"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
        <div className="relative z-20 max-w-4xl mx-auto text-center px-6 py-32 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white section-content">
            Connect
          </h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto font-light section-content">
            Interested in collaboration or have a project in mind? Let&apos;s discuss how I can help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:avni@example.com" className="btn btn-primary" aria-label="Email Avni">
              Send Email
            </a>
            <a href="#section1" className="btn btn-secondary" aria-label="Back to top">
              Back to Top
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}