"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  TrophyIcon, 
  UserGroupIcon, 
  SparklesIcon,
  MapPinIcon 
} from "@heroicons/react/24/outline";

const ACHIEVEMENTS = [
  {
    id: 1,
    role: "Campus Ambassador",
    organization: "Devsinc",
    location: "Lahore",
    logo: "/devsinc.jpeg", // Ensure this path matches your public folder
    color: "from-orange-600 to-amber-500",
    points: [
      "Represented one of Pakistan's leading software houses on campus.",
      "Facilitated recruitment drives and technical workshops for students.",
      "Bridged the gap between academia and the IT industry through networking."
    ]
  },
  {
    id: 2,
    role: "Social Media Team Lead",
    organization: "UO Media Society",
    location: "University of Okara",
    logo: "/media.jpg", // Ensure this path matches your public folder
    color: "from-amber-500 to-orange-400",
    points: [
      "Directed digital content strategy for university-wide events.",
      "Managed a cross-functional team of creators, designers, and editors.",
      "Increased social media engagement by implementing consistent branding."
    ]
  }
];

const AchievementCard = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative group bg-amber-950/30 border border-orange-500/10 rounded-[2.5rem] p-8 backdrop-blur-xl hover:border-orange-500/40 transition-all duration-500"
  >
    {/* Organization Logo & Info */}
    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
      <div className="w-20 h-20 rounded-2xl bg-white p-2 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
        <img 
          src={item.logo} 
          alt={item.organization} 
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div>
        <h3 className="text-2xl font-black text-white tracking-tight">{item.role}</h3>
        <div className="flex flex-wrap gap-4 mt-1">
          <span className="text-orange-500 font-mono text-xs uppercase tracking-widest font-bold">
            {item.organization}
          </span>
          <span className="flex items-center gap-1 text-amber-100/40 text-xs font-mono">
            <MapPinIcon className="w-3 h-3" />
            {item.location}
          </span>
        </div>
      </div>
    </div>

    {/* Key Achievement Points */}
    <div className="space-y-4">
      {item.points.map((point, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <div className="mt-1.5">
            <SparklesIcon className="w-4 h-4 text-orange-500/60" />
          </div>
          <p className="text-amber-100/70 text-sm leading-relaxed font-light">
            {point}
          </p>
        </div>
      ))}
    </div>

    {/* Decorative corner accent */}
    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 blur-[40px] rounded-full group-hover:opacity-10 transition-opacity`} />
  </motion.div>
);

const AchievementsSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <TrophyIcon className="w-6 h-6 text-orange-500" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-orange-500">Milestones</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter text-center">
            Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ACHIEVEMENTS.map((item) => (
            <AchievementCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;