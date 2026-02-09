"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { EnvelopeIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "", // Added email field
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setEmailSubmitted(true);
        setFormData({ email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 grid md:grid-cols-2 gap-12 items-center">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
            Let’s <span className="text-blue-500">Connect</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md leading-relaxed">
            I’m currently open to new opportunities and collaborations. 
            Whether you have a specific project in mind or just want to network, 
            don't hesitate to reach out!
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <EnvelopeIcon className="w-6 h-6 text-blue-500" />
              </div>
              <span className="font-medium">mmsohaib617@gmail.com</span>
            </div>
          </div>

          <div className="socials flex flex-row gap-4">
            {[
              { icon: GithubIcon, link: "https://github.com/M-SuhaibGM", label: "GitHub" },
              { icon: LinkedinIcon, link: "https://www.linkedin.com/in/muhammad-suhaib-811452326/", label: "LinkedIn" }
            ].map((social, i) => (
              <Link 
                key={i} 
                href={social.link} 
                target="_blank"
                className="p-3 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl hover:border-blue-500 transition-all group"
              >
                <Image 
                  src={social.icon} 
                  alt={social.label} 
                  width={24} 
                  height={24} 
                  className="dark:invert-0 grayscale group-hover:grayscale-0 transition-all"
                />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="z-10 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-8 rounded-3xl shadow-xl backdrop-blur-sm"
      >
        {emailSubmitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold dark:text-white mb-2">Message Sent!</h3>
            <p className="text-slate-500 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
            <button 
              onClick={() => setEmailSubmitted(false)}
              className="mt-6 text-blue-500 text-sm font-bold hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="text-slate-700 dark:text-slate-200 block mb-2 text-sm font-bold uppercase tracking-wider">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-slate-100 dark:bg-[#121212] border border-black/5 dark:border-white/10 placeholder-slate-500 text-slate-900 dark:text-white text-sm rounded-xl block w-full p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-slate-700 dark:text-slate-200 block mb-2 text-sm font-bold uppercase tracking-wider">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="bg-slate-100 dark:bg-[#121212] border border-black/5 dark:border-white/10 placeholder-slate-500 text-slate-900 dark:text-white text-sm rounded-xl block w-full p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="Let's build something!"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-slate-700 dark:text-slate-200 block mb-2 text-sm font-bold uppercase tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="bg-slate-100 dark:bg-[#121212] border border-black/5 dark:border-white/10 placeholder-slate-500 text-slate-900 dark:text-white text-sm rounded-xl block w-full p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                placeholder="Describe your project..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="relative group overflow-hidden bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all active:scale-95 disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? "Sending..." : "Shoot Message"}
              </span>
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default EmailSection;