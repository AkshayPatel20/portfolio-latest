import React, { useState } from "react";
import { motion } from "framer-motion";
import LearningProjectsModal from "./LearningProjectsModal";

const projects = [
  {
    title: "Early Bird Clothing",
    role: "Full Stack Developer",
    desc: "Online clothing store with modern UI, cart, and payment integration.",
    img: "/img/earlybird.png",
    link: "http://earlybird-clothing.000webhostapp.com/",
  },
  {
    title: "NMITD College App",
    role: "Full Stack Developer",
    desc: "College app with syllabus, notice board, and student resources.",
    img: "/img/nmitd-apps.png",
    link: "https://drive.google.com/open?id=1IKYMfxE72GIvs6T-I4VRKJlL4ca2ye27",
  },
  {
    title: "ASRK Music",
    role: "Full Stack Developer",
    desc: "Online music platform to stream and share songs.",
    img: "/img/asr-music.png",
    link: "http://asrk-music.000webhostapp.com",
  },
];

export default function Projects() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container py-24 px-4 md:px-0">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-4"
      >
        Personal Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-gray-400 mb-14 text-lg"
      >
        Want to see more examples?{" "}
        <button
          onClick={() => setOpenModal(true)}
          className="text-yellow-500 font-semibold underline mr-3 hover:text-yellow-400"
        >
          View Learning Projects →
        </button>
        <a
          href="mailto:patelakshay55@gmail.com"
          className="text-yellow-500 font-semibold underline hover:text-yellow-400"
        >
          Email Me
        </a>
      </motion.p>

      {/* Projects Grid */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="
              relative group rounded-3xl overflow-hidden 
              bg-gradient-to-br from-gray-900/50 via-gray-800/40 to-gray-900/60
              backdrop-blur-xl border border-white/10 
              shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.5)]
              hover:border-yellow-400/40 hover:shadow-yellow-500/10
              transition-all duration-500
            "
          >
            {/* Project Image */}
            <div className="overflow-hidden rounded-t-3xl">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-64 object-cover transform 
                           group-hover:scale-110 group-hover:brightness-110 
                           transition-all duration-700"
              />
            </div>

            {/* Top Gradient Overlay for polish */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 pointer-events-none"></div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 p-6 pb-7 w-full 
                            bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                            backdrop-blur-[2px] transition-all duration-500">
              
              <h3 className="text-2xl font-extrabold text-white mb-1 leading-tight drop-shadow-lg">
                {p.title}
              </h3>

              <span
                className="text-sm bg-yellow-400 text-black font-semibold 
                px-4 py-1 rounded-full shadow-md inline-block w-fit mb-3"
              >
                {p.role}
              </span>

              <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                {p.desc}
              </p>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block px-6 py-2.5 rounded-xl font-bold 
                  bg-gradient-to-r from-yellow-300 to-yellow-500 
                  text-black shadow-lg hover:shadow-yellow-400/40 
                  hover:-translate-y-1 transition-all duration-300
                "
              >
                Visit Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <LearningProjectsModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
