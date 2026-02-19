"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  BriefcaseIcon, 
  CalendarIcon, 
  CheckCircleIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

const ExperienceSection = () => {
  const internshipDetails = {
    company: "NIT-Services",
    role: "DevOps Engineer ",
    duration: "June 2024 – August 2024", // Adjust dates as needed
    location: "Lahore, Pakistan (Remote/On-site)",
    description: "Successfully completed an intensive DevOps internship focused on modern cloud-native technologies and automation workflows.",
    learnings: [
      "Hands-on experience with AWS Cloud Services (EC2, IAM, S3, VPC, ECS, EKS, RDS, Cloud Watch).",
      "Automated infrastructure provisioning using Terraform (IaC).",
      "Mastered containerization and orchestration with Docker and Kubernetes for full-stack apps.",
      "Built and optimized CI/CD pipelines using GitHub Actions.",
      "Configured Nginx reverse proxies with Let's Encrypt for secure production SSL."
    ]
  };

  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <BriefcaseIcon className="w-6 h-6 text-orange-500" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-orange-500">Professional Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter text-center">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-slate-900/40 border border-orange-500/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl hover:border-orange-500/30 transition-all duration-500"
          >
            {/* Header: Role & Company */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-3xl font-black text-white group-hover:text-orange-400 transition-colors">
                  {internshipDetails.role}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl font-bold text-orange-500 font-mono italic">@ {internshipDetails.company}</span>
                </div>
              </div>
              
              <div className="flex flex-col md:items-end gap-2 text-slate-400 font-mono text-sm">
                <div className="flex items-center gap-2 bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">
                  <CalendarIcon className="w-4 h-4 text-orange-500" />
                  <span className="text-orange-200 uppercase">{internshipDetails.duration}</span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light italic border-l-4 border-orange-500/40 pl-6">
              "{internshipDetails.description}"
            </p>

            {/* What I Learned Section */}
            <div className="space-y-6">
              <h4 className="flex items-center gap-2 text-xs font-mono font-bold text-white/40 uppercase tracking-[0.2em]">
                <SparklesIcon className="w-4 h-4 text-amber-500" />
                Key Learnings & Impact:
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {internshipDetails.learnings.map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-orange-500/5 transition-colors"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-slate-400 text-sm leading-snug">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent blur-md" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;