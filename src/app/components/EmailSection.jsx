"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { EnvelopeIcon, ChatBubbleBottomCenterTextIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
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
      console.error("Transmission Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 grid md:grid-cols-2 gap-12 items-center">
      {/* Background Decorative Glow - Switched to Orange */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-orange-600/10 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">Connection</span>
          </h2>
          <p className="text-white mb-8 max-w-md leading-relaxed font-light">
            Looking for a DevOps engineer to optimize your CI/CD pipelines or manage your cloud infrastructure?
            My inbox is always open for technical discussions and collaborations.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20">
                <EnvelopeIcon className="w-6 h-6 text-amber-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] font-bold uppercase text-amber-700 tracking-widest">Direct Mail</span>
                <span className="font-mono text-sm text-white">shahzaib.kp766@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="socials flex flex-row gap-4">
            {[
              { icon: GithubIcon, link: "https://github.com/ShahzaibInnovation/", label: "GitHub" },
              { icon: LinkedinIcon, link: "https://www.linkedin.com/in/shahzaib-akram-ab01b827b/", label: "LinkedIn" }
            ].map((social, i) => (
              <Link
                key={i}
                href={social.link}
                target="_blank"
                className="p-3 bg-slate-900 border border-white rounded-xl hover:border-orange-500 transition-all group"
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={24}
                  height={24}
                  className=" transition-all"
                />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 1 }}
        className="z-10 bg-slate-900/50 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-md"
      >
        {emailSubmitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-orange-500/20 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-orange-500/40">
              <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-mono">Status: Delivered</h3>
            <p className="text-slate-400 text-sm">Message routed successfully. Expect a response shortly.</p>
            <button
              onClick={() => setEmailSubmitted(false)}
              className="mt-6 text-orange-500 text-xs font-mono font-bold hover:text-orange-400 transition-colors"
            >
              [ SEND_NEW_TRANSMISSION ]
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="text-slate-400 block mb-2 text-[10px]  font-bold uppercase tracking-[0.2em]">
                Source_Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-slate-950 border border-white/5 placeholder-slate-600 text-white text-sm rounded-xl block w-full p-4 focus:ring-1 focus:ring-orange-500 outline-none transition-all "
                placeholder="developer@node.local"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-slate-400 block mb-2 text-[10px]  font-bold uppercase tracking-[0.2em]">
                Packet_Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="bg-slate-950 border border-white/5 placeholder-slate-600 text-white text-sm rounded-xl block w-full p-4 focus:ring-1 focus:ring-orange-500 outline-none transition-all "
                placeholder="Collaboration Inquiry"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-slate-400 block mb-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                Payload_Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="bg-slate-950 border border-white/5 placeholder-slate-600 text-white text-sm rounded-xl block w-full p-4 focus:ring-1 focus:ring-orange-500 outline-none transition-all resize-none "
                placeholder="Enter message details..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="relative group overflow-hidden bg-orange-600 text-white font-mono font-bold py-4 px-6 rounded-xl transition-all active:scale-95 disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {loading ? "TRANSMITTING..." : "EXECUTE SEND"}
                {!loading && <PaperAirplaneIcon className="w-4 h-4" />}
              </span>
              <div className="absolute inset-0 bg-orange-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default EmailSection;