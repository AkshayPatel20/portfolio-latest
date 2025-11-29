import React from "react";
import { motion } from "framer-motion";

import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPhp, 
  FaReact, 
  FaNodeJs, 
  FaBootstrap 
} from "react-icons/fa";

import { 
  SiJquery, 
  SiFirebase, 
  SiGraphql, 
  SiCodeigniter, 
  SiAngular, 
  SiPostman, 
  SiAwsamplify, 
  SiSocketdotio, 
  SiMysql 
} from "react-icons/si";

const skills = [
  { name: "HTML5", level: 98, icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400" /> },
  { name: "jQuery", level: 90, icon: <SiJquery className="text-blue-400" /> },
  { name: "PHP", level: 85, icon: <FaPhp className="text-purple-600" /> },
  { name: "MySQL", level: 80, icon: <SiMysql className="text-blue-700" /> },
  { name: "CodeIgniter", level: 70, icon: <SiCodeigniter className="text-red-500" /> },
  { name: "Bootstrap", level: 98, icon: <FaBootstrap className="text-purple-700" /> },
  { name: "React", level: 75, icon: <FaReact className="text-blue-400" /> },
  { name: "React Native", level: 70, icon: <FaReact className="text-blue-400" /> },
  { name: "Angular", level: 60, icon: <SiAngular className="text-red-600" /> },
  { name: "Firebase", level: 80, icon: <SiFirebase className="text-yellow-400" /> },
  { name: "GraphQL", level: 70, icon: <SiGraphql className="text-pink-600" /> },

  // FIXED AWS ICON
  { name: "AWS", level: 70, icon: <SiAwsamplify className="text-orange-500" /> },

  { name: "Socket.io", level: 85, icon: <SiSocketdotio className="text-gray-800" /> },
  { name: "Postman", level: 90, icon: <SiPostman className="text-orange-600" /> },
  { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-600" /> }
];

export default function Skills() {
  return (
    <div className="container py-20">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900">
        My Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="p-6 rounded-2xl backdrop-blur-md bg-white/40 shadow-lg hover:shadow-2xl border border-white/30 transition-all"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="text-3xl">{skill.icon}</div>
              <p className="text-lg font-bold text-gray-800">{skill.name}</p>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
              />
            </div>

            <p className="text-sm text-gray-700 mt-2 font-semibold">
              {skill.level}%
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
