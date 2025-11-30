import React, { useEffect, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const words = ["user interfaces.", "web applications.", "business websites.", "mobile apps."];

export default function Header() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Smooth scroll to footer
  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <header
      className="relative h-screen bg-cover bg-center hero-overlay"
      style={{ backgroundImage: "url('/img/landing.png')" }}
    >
      <Particles
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            color: { value: "#ffffff" },
          },
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hello, I'm Akshay. I design & build <br />
          <span className="text-yellow-300">
            {words[index].substring(0, subIndex)}
          </span>
        </h1>

        <a
          href="#footer"
          onClick={scrollToFooter}
          className="mt-8 inline-block bg-yellow-400 text-dark px-8 py-3 rounded-full font-semibold"
        >
          Yes, I'm Available For Hire
        </a>

        <p className="mt-6 text-white/80">
          Learn more about what I do <a href="#hstart" className="inline-block ml-2">↓</a>
        </p>

        {/* 🔥 SOCIAL ICONS ADDED HERE */}
        <div className="flex gap-6 mt-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/akshaypatel20/"
            target="_blank"
            className="
              w-12 h-12 flex items-center justify-center rounded-full 
              bg-white/10 backdrop-blur-lg border border-white/20 
              hover:bg-yellow-400 hover:text-black transition-all duration-300
              shadow-lg hover:shadow-yellow-400/40
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C3.87 3.5 3 4.37 3 5.48c0 1.1.87 1.97 1.98 1.97h.02c1.1 0 1.98-.87 1.98-1.97A1.98 1.98 0 0 0 4.98 3.5zM3.5 8h3v12h-3V8zm7.5 0h2.8v1.7h.04c.39-.73 1.35-1.5 2.78-1.5 2.98 0 3.54 1.96 3.54 4.5V20h-3v-5.5c0-1.31-.03-3-1.84-3-1.84 0-2.12 1.43-2.12 2.9V20h-3V8z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/akshaypatel9244"
            target="_blank"
            className="
              w-12 h-12 flex items-center justify-center rounded-full 
              bg-white/10 backdrop-blur-lg border border-white/20 
              hover:bg-yellow-400 hover:text-black transition-all duration-300
              shadow-lg hover:shadow-yellow-400/40
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.51 4.51 0 0 0 12 7.5zm0 7.3a2.8 2.8 0 1 1 2.8-2.8 2.81 2.81 0 0 1-2.8 2.8zM17.8 6.2a1.2 1.2 0 1 1-1.2-1.2 1.2 1.2 0 0 1 1.2 1.2z"/>
            </svg>
          </a>
        </div>
        {/* END SOCIAL ICONS */}
      </div>
    </header>
  );
}
