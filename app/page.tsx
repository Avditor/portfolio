import React from 'react';

export default function HomePage() {
  return (
    <div className="scroll-smooth text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-30 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-extrabold">AVNI</div>
          <nav>
            <ul className="flex space-x-6 text-sm font-semibold">
              <li><a href="#section1" className="hover:opacity-90">Home</a></li>
              <li><a href="#section2" className="hover:opacity-90">Projects</a></li>
              <li><a href="#section3" className="hover:opacity-90">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Section 1 */}
      <section
        id="section1"
        className="min-h-screen bg-fixed bg-center bg-cover relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-28">
          <img
            src="/avni.jpg"
            alt="Avni Kanishk"
            className="w-44 h-44 object-cover rounded-full shadow-2xl border-4 border-white mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            AVNI KANISHK
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 mb-6">
            Software Developer | Full Stack Engineer | Building impactful digital experiences
          </p>
          <div className="flex justify-center gap-4">
            <a href="#section2" className="bg-white/90 text-black px-6 py-3 rounded-md font-semibold hover:opacity-90">See Projects</a>
            <a href="#section3" className="border border-white/50 px-6 py-3 rounded-md hover:bg-white/10">Contact</a>
          </div>
        </div>

        {/* decorative SVG divider that sits at the bottom of section to reveal next bg */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
          <svg className="relative block w-[calc(100%+1px)] h-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="rgba(0,0,0,0.45)"></path>
          </svg>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="section2"
        className="min-h-screen bg-fixed bg-center bg-cover relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-28">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
          <p className="text-lg text-white/90 mb-8">
            A snapshot of recent work — full-stack apps, tooling, and polished UI. I focus on clarity, maintainability, and performance so products scale with users.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60" alt="project" className="w-full h-32 object-cover rounded-md mb-3" />
              <h3 className="font-semibold">Product Dashboard</h3>
              <p className="text-sm text-white/80">Realtime analytics, clear UX and reliable APIs.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60" alt="project" className="w-full h-32 object-cover rounded-md mb-3" />
              <h3 className="font-semibold">E‑commerce Platform</h3>
              <p className="text-sm text-white/80">Fast, accessible checkout and admin tools.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60" alt="project" className="w-full h-32 object-cover rounded-md mb-3" />
              <h3 className="font-semibold">Design System</h3>
              <p className="text-sm text-white/80">Components, tokens and a consistent developer experience.</p>
            </div>
          </div>
        </div>

  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
          <svg className="relative block w-[calc(100%+1px)] h-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0 0v46.29c47.24 22.65 103.63 35.94 161 39.14 59.57 3.33 118.94-3.71 176-17.7 68-16.62 130.8-45.67 198-59.74 106.76-23.67 203.84-4.93 305 22.1 61.23 16.06 122.49 31.29 185 28.1 54.3-2.78 105.74-18.51 157-34.41V0z" fill="rgba(0,0,0,0.45)"></path>
          </svg>
        </div>
      </section>

      {/* Section 3 */}
      <section
        id="section3"
        className="min-h-screen bg-fixed bg-center bg-cover relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-28">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
          <p className="text-lg text-white/90 mb-8">Interested in collaborating or want to say hi? I respond to thoughtful messages and enjoy building something useful together.</p>
          <a href="mailto:avni@example.com" className="bg-white/90 text-black px-6 py-3 rounded-md font-semibold hover:opacity-90">Email Me</a>
        </div>
      </section>
    </div>
  );
}