import React, { useEffect, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const words = ["user interfaces.", "web applications.", "business websites."];

export default function Header() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

    // Function to scroll smoothly to footer
  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


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
      </div>
    </header>
  );
}
