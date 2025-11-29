import React, { useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    website: "",
    desc: "",
  });

  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("Submitting...");

    try {
      // Save to Firestore
      await addDoc(collection(db, "enquiries"), {
        name: form.name,
        email: form.email,
        phone: form.number,
        website: form.website,
        message: form.desc,
        createdAt: serverTimestamp(),
      });

      setStatus(`Thanks ${form.name}, I'll get back to you shortly!`);

      // Reset form
      setForm({
        name: "",
        email: "",
        number: "",
        website: "",
        desc: "",
      });

    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Try again.");
    }

    setSubmitting(false);
  }

  return (
    <footer id="footer" className="relative bg-slate-950 text-white pt-20 pb-12 overflow-hidden">

      {/* Decorative background blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute -bottom-32 -right-20 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="container relative z-10 grid md:grid-cols-2 gap-14">

        {/* Left Text Section */}
        <div>
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold leading-snug"
          >
            Let's Build  
            <span className="text-yellow-400"> Something Amazing</span> Together
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-gray-300 leading-relaxed text-lg"
          >
            I'm currently open to new collaborations.  
            Tell me a bit about your project, and I’ll get back to you.
          </motion.p>

          <p className="mt-6 text-gray-400">
            Email:{" "}
            <span className="text-yellow-300 font-semibold">
              patelakshay55@gmail.com
            </span>
          </p>
        </div>

        {/* Form Section */}
        <motion.form
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={onSubmit}
          className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <input
              required
              placeholder="Your Name"
              className="p-3 rounded-md bg-white/90 text-slate-900 focus:ring-2 focus:ring-yellow-300 outline-none"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              required
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-white/90 text-slate-900 focus:ring-2 focus:ring-yellow-300 outline-none"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              required
              placeholder="Phone Number"
              pattern="[789][0-9]{9}"
              className="p-3 rounded-md bg-white/90 text-slate-900 focus:ring-2 focus:ring-yellow-300 outline-none"
              value={form.number}
              onChange={(e) => setForm({ ...form, number: e.target.value })}
            />

            <input
              required
              placeholder="Website / Company"
              className="p-3 rounded-md bg-white/90 text-slate-900 focus:ring-2 focus:ring-yellow-300 outline-none"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
            />

            <textarea
              required
              placeholder="Tell me about your project..."
              className="p-3 rounded-md bg-white/90 text-slate-900 sm:col-span-2 h-28 focus:ring-2 focus:ring-yellow-300 outline-none"
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
            ></textarea>

            <div className="sm:col-span-2 mt-2">
              <button
                disabled={submitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-yellow-500/30 transition-all"
              >
                {submitting ? "Submitting..." : "Submit Your Project"}
              </button>

              <div className="mt-3 text-sm text-yellow-300">{status}</div>
            </div>
          </div>
        </motion.form>
      </div>

      <div className="text-center text-gray-400 mt-16">
        © 2025 Crafted with ❤️ by Akshay Patel
      </div>
    </footer>
  );
}
