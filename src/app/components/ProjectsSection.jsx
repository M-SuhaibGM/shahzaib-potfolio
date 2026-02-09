"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 6,
    title: " messanger ",
    description: "Next-auth Authentication , mysql, shadcn ,Next.js ,prsima , react,TypeScript, Tailwind",
    image: "/images/projects/messanger.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/M-SuhaibGM/Messenger.git",
    previewUrl: "https://messenger-smoky-three.vercel.app/",
  },
  {
    id: 12,
    title: " Canva",
    description: "Next-auth Authentication , mongodb, shadcn ,Next.js ,prsima , react,TypeScript, Tailwind,paypal,Ai integration, Fabric js",
    image: "/images/projects/canva.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/M-SuhaibGM/canva-clone.git",
    previewUrl: "https://canva-clone-xi-jet.vercel.app/",
  }, {
    id: 4,
    title: "Trello",
    description: "mysql ,Nextjs , react, javascript , TypeScript, Tailwind ,clerk, shadcn ,Unsplash",
    image: "/images/projects/trelo.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/M-SuhaibGM/Taskify.git",
    previewUrl: "https://taskify-lyart-psi.vercel.app/",
  }, {
    id: 22,
    title: "Udemy",
    description: "mysql ,Nextjs , react, javascript , TypeScript, Tailwind ,clerk, shadcn ,stripe",
    image: "/images/projects/lms.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/M-SuhaibGM/lms.git",
    previewUrl: "https://lms-seven-sand.vercel.app/",
  },
  {
    id: 1,
    title: "blog Website",
    description: "react mysql css express  authantication javascript ",
    image: "/images/projects/blog.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/M-SuhaibGM/blog-app.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: " spotfy Website",
    description: "NEXT.js prisma react javascript  mysql",
    image: "/images/projects/spotify.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/M-SuhaibGM/Spotify-Clone.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Weather Application",
    description: "Project 3 description",
    image: "/images/projects/weather.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/M-SuhaibGM/weather-app.git",
    previewUrl: "https://weather-app-nu-tan-11.vercel.app/",
  },

  {
    id: 5,
    title: "facebook clone ",
    description: "Authentication  mysql node.js express react CRUD operations",
    image: "/images/projects/facebook.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/M-SuhaibGM/facebook-clone.git",
    previewUrl: "/",
  },

  {
    id: 7,
    title: "Dise game",
    description: "javascript html css",
    image: "/images/projects/dice.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/M-SuhaibGM/dice-game.git",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "NETFLIX clone ",
    description: "NEXT JS prisma chakra ui Authentication ",
    image: "/images/projects/netflix.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/M-SuhaibGM/Netflix-Clone.git",
    previewUrl: "/",
  }, {
    id: 8,
    title: "Portfolio",
    description: "NEXT JS tailwand css react javascript",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/M-SuhaibGM/portfolio.git",
    previewUrl: "/",
  },
];

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-blue-500 bg-blue-500"
    : "text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700 hover:border-blue-500 hover:text-blue-500";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-2 text-sm font-bold cursor-pointer transition-all duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="flex flex-col items-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter"
        >
          Featured <span className="text-blue-500">Projects</span>
        </motion.h2>

        {/* Modern Filter Tabs */}
        <div className="flex flex-row justify-center items-center gap-2 py-6 flex-wrap">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Full Stack"
            isSelected={tag === "Full Stack"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Frontend"
            isSelected={tag === "Frontend"}
          />
        </div>
      </div>

      <motion.ul
        ref={ref}
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl !== "/" ? project.previewUrl : null}
                // Automatically split description into tags for the badges
                tags={project.description.split(",").map(t => t.trim())}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
};

export default ProjectsSection;