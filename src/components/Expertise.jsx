import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  { title: "Fast", icon: "⚡", text: "Fast load times and lag-free interaction." },
  { title: "Responsive", icon: "📱", text: "Layouts that work on any device." },
  { title: "Dynamic", icon: "✨", text: "Pages that come to life." },
  { title: "Apps", icon: "📦", text: "I build Android & cross-platform apps." }
];

export default function Expertise() {
  return (
    <div className="container py-20 px-4 md:px-0" id="hstart">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
        My Expertise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cards.map((c, idx) => (
          <motion.div
            key={c.title}
            className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
          >
            <div className="text-5xl mb-4">{c.icon}</div>
            <h3 className="text-xl font-bold mb-2">{c.title}</h3>
            <p className="text-gray-500 text-sm">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
