import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFolder, FaArrowRight } from "react-icons/fa";

export default function LearningProjectsModal({ open, onClose }) {
  if (!open) return null;

  const projects = [
    {
      name: "NETFLIX CLONE",
      tech: "React",
      link: "https://netflix-akshaypatel20.web.app/",
    },
    {
      name: "CASE CONVERTER",
      tech: "React, Firebase",
      link: "https://caseconverter-akshaypatel20.web.app/",
    },
    {
      name: "TIC TAC TOE",
      tech: "Angular",
      link: "https://akshaypatel20.github.io/tic-tac-toe-game/",
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-end z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        {/* Modal Body */}
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          exit={{ y: 200 }}
          transition={{ duration: 0.35 }}
          className="bg-white rounded-t-3xl w-full max-w-xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Learning Projects</h2>

          <div className="space-y-4">
            {projects.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-gray-100"
              >
                <FaFolder className="text-yellow-500 text-3xl mt-1" />

                <div>
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <p className="text-gray-700">
                    Technology: <span className="font-semibold">{p.tech}</span>
                  </p>
                  <a
                    href={p.link}
                    target="_blank"
                    className="mt-1 inline-flex items-center gap-2 text-blue-600 font-semibold"
                  >
                    Visit Project <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            className="w-full mt-6 bg-slate-900 text-white py-3 rounded-xl font-semibold"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
