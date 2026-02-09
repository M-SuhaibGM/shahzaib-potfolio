"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const VercelIcon = () => (
  <svg 
    width="24" height="24" viewBox="0 0 76 65" fill="currentColor" 
    className="h-5 w-5 text-slate-900 dark:text-white"
  >
    <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
  </svg>
);

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tags = [] }) => {
  return (
    <div className="group relative rounded-2xl bg-white dark:bg-[#121212] border border-black/5 dark:border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      
      {/* Image Container */}
      <div className="h-52 md:h-64 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
        
        {/* Overlay - lowered z-index to ensure buttons are on top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 z-10" />
        
        {/* Action Buttons - High Z-Index for clickability */}
        <div className="absolute top-4 right-4 flex gap-3 z-30 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <a 
            href={gitUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/40 transition-all transform hover:scale-110"
          >
            <Image 
              src={GithubIcon} 
              alt="Github" 
              className="h-6 w-6 invert dark:invert-0" 
              width={24} 
              height={24} 
            />
          </a>

          {previewUrl && (
            <a 
              href={previewUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-blue-500 backdrop-blur-md border border-blue-400/50 hover:bg-blue-600 transition-all transform hover:scale-110"
            >
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-20">
        <div className="flex justify-between items-start mb-3">
          <h5 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
            {title}
          </h5>
          {previewUrl && <VercelIcon />}
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5 dark:border-white/5">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative Glow - Moved to z-0 so it's behind everything */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 z-0 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;