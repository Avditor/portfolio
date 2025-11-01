import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-8 sm:px-16 py-24 text-center sm:text-left sm:items-start">
        
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-zinc-200 dark:ring-zinc-800">
            <Image
              src="/avatar.jpg" // replace with your image path
              alt="Avni Kanishk"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-black dark:text-zinc-50 tracking-tight">
              Avni Kanishk
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-1">
              Full Stack Developer • MERN | Next.js | Python
            </p>
            <p className="text-zinc-500 dark:text-zinc-500 mt-2 max-w-md">
              Building scalable web apps with clean design, intuitive UX, and AI-powered efficiency.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full">
          <Link
            href="https://github.com/Avditor"
            target="_blank"
            className="flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all"
          >
            <Image
              src="/github-mark.svg"
              alt="GitHub"
              width={18}
              height={18}
              className="mr-2"
            />
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/avni-kanishk"
            target="_blank"
            className="flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition-all"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={18}
              height={18}
              className="mr-2 dark:invert"
            />
            LinkedIn
          </Link>
          <Link
            href="mailto:avni@example.com"
            className="flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all"
          >
            Contact Me
          </Link>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 w-full border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900">Next.js</span>
            <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900">React</span>
            <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900">Node.js</span>
            <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900">Express</span>
            <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900">MongoDB</span>
            <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900">TypeScript</span>
            <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900">Docker</span>
            <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900">Python</span>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-sm text-zinc-500 dark:text-zinc-600">
          © {new Date().getFullYear()} Avni Kanishk — Crafted with ❤️ using Next.js
        </footer>
      </main>
    </div>
  );
}
