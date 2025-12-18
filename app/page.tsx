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
          <a href="#section1" className="text-xl font-bold tracking-tight text-white hover:text-cyan-300 transition-colors">AVNI</a>
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
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80')",
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
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white section-content opacity-0 -translate-y-8">
            Connect
          </h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto font-light section-content opacity-0 -translate-y-8">
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
          <div className="flex justify-center gap-6 mt-12 section-content opacity-0 -translate-y-8">
            <a href="https://github.com/Avditor" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-2xl">
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