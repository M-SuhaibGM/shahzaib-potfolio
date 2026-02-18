"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  CommandLineIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const PROJECTS = [
  {
    id: 1, // or the next available ID in your PROJECTS array
    title: "Automated AWS CI/CD Pipeline",
    description: "Designed and implemented an end-to-end automated deployment pipeline for a full-stack application on AWS EC2, following industry-standard production practices.",
    role: "DevOps Engineer",
    image: "/images/projects/PROJECT1.jpg", // Update this to your project screenshot path
    tech: ["GitHub Actions", "AWS EC2", "AWS ECR", "Docker", "Linux", "SSH"],
    features: [
      "Automated CI/CD triggered on every GitHub commit",
      "Secure secrets management using GitHub Secrets",
      "Containerized multi-tier (Frontend/Backend) deployment",
      "Automated image versioning and ECR push/pull logic"
    ],
    achievements: [
      "Achieved zero manual deployment steps",
      "Implemented secure, production-ready AWS credential handling",
      "Automated post-deployment validation and cleanup",
      "Streamlined delivery for faster and more reliable deployments"
    ]
  },
  {
    id: 2,
    title: "Multi-Environment IaC Architecture",
    description: "Architected and deployed isolated Development, Staging, and Production environments on AWS using Terraform Custom Modules for standardized infrastructure delivery.",
    role: "Cloud Infrastructure Engineer",
    image: "/images/projects/PROJECT2.jpg", // Update with your Terraform/AWS architecture diagram
    tech: ["Terraform", "AWS (EC2/S3/DynamoDB)", "HCL", "Remote Backend", "State Management"],
    features: [
      "Custom Terraform Modules for reusable and maintainable infrastructure",
      "Remote State Management using S3 for secure team collaboration",
      "State Locking with DynamoDB to prevent concurrent deployment conflicts",
      "Environment-specific configurations for VMs, Storage, and Databases"
    ],
    achievements: [
      "Achieved 100% automated infrastructure provisioning",
      "Eliminated manual configuration errors across environments",
      "Reduced environment setup time from hours to minutes",
      "Implemented scalable architecture capable of supporting complex delivery cycles"
    ]
  },
  {
    id: 3,
    title: "Cloud Governance & State Security",
    description: "Implemented a robust Infrastructure as Code (IaC) governance model on AWS, focusing on centralized state management and high-concurrency protection.",
    role: "Infrastructure Lead",
    image: "/images/projects/PROJECT3.jpg", // Replace with a screenshot of your S3 bucket or DynamoDB table
    tech: ["Terraform", "AWS S3", "Amazon DynamoDB", "IAM Policies", "Encryption"],
    features: [
      "Centralized State Management via encrypted S3 backend",
      "Distributed State Locking mechanism using DynamoDB",
      "Version control integration for disaster recovery of state files",
      "Cross-team collaboration framework for shared infrastructure"
    ],
    achievements: [
      "Eliminated 100% of risk regarding concurrent state overwrites",
      "Established a secure, production-grade audit trail for infra changes",
      "Reduced accidental state corruption risks by implementing remote storage",
      "Standardized enterprise-level DevOps workflows for team environments"
    ]
  },
  {
    id: 4,
    title: "Real-Time Container Observability",
    description: "Implemented a comprehensive monitoring and observability system for Docker environments to track container health, resource utilization, and performance metrics.",
    role: "Observability Specialist",
    image: "/images/projects/PROJECT4.jpg", // Use a screenshot of your Grafana dashboard
    tech: ["Prometheus", "Grafana", "cAdvisor", "Docker", "Time-Series Data"],
    features: [
      "Real-time resource tracking (CPU, Memory, Disk, Network I/O)",
      "Container lifecycle monitoring and uptime tracking",
      "Automated discovery of running, idle, or deleted containers",
      "Integrated cAdvisor for granular, container-level performance data"
    ],
    achievements: [
      "Enabled proactive identification of system performance bottlenecks",
      "Improved root cause analysis speed during container incidents",
      "Optimized resource allocation based on historical usage data",
      "Built a production-ready dashboard for 24/7 infrastructure health visibility"
    ]
  },
  {
    id: 5,
    title: "Resilient & Scalable AWS Architecture",
    description: "Designed and stress-tested a highly available web infrastructure on AWS utilizing Auto Scaling and Load Balancing to ensure 100% uptime under dynamic workloads.",
    role: "Cloud Architect",
    image: "/images/projects/PROJECT5.jpg", // Use a diagram showing ALB and Auto Scaling groups
    tech: ["AWS (ALB/ASG)", "CloudWatch", "EC2 Launch Templates", "SNS", "Stress Testing"],
    features: [
      "Traffic distribution via Application Load Balancer (ALB)",
      "Dynamic resource provisioning with Auto Scaling Groups",
      "Standardized deployments using EC2 Launch Templates",
      "Automated monitoring and email alerts via CloudWatch & SNS"
    ],
    achievements: [
      "Validated system stability through rigorous high-traffic stress testing",
      "Optimized infrastructure costs by scaling down during low-demand periods",
      "Enhanced fault tolerance with multi-instance redundancy",
      "Implemented proactive issue resolution via real-time CloudWatch alerts"
    ]
  }
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-32`}>
      {/* --- LEFT SIDE: PROJECT THUMBNAIL --- */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2"
      >
        <div className="relative group rounded-3xl overflow-hidden border border-orange-500/20 shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-amber-950/40 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </motion.div>

      {/* --- RIGHT SIDE: PROJECT DETAILS --- */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 space-y-6"
      >
        <div className="space-y-2">
          <h3 className="text-4xl font-black text-white tracking-tighter leading-tight">
            {project.title}
          </h3>
          <p className="text-amber-100/70 text-lg font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex items-center gap-2 text-orange-400 font-mono text-sm font-bold uppercase tracking-widest">
          <CommandLineIcon className="w-5 h-5" />
          {project.role}
        </div>

        {/* Technology Tags */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold text-white/40 uppercase tracking-[0.2em]">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-4 py-1.5 rounded-full bg-amber-950/60 border border-orange-500/20 text-orange-400 font-mono text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold text-white/40 uppercase tracking-[0.2em]">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-amber-100/80 text-sm">
                <CheckCircleIcon className="w-5 h-5 text-green-500/70" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements Grid */}
        <div className="pt-4">
          <h4 className="text-xs font-mono font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Key Achievements:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.achievements.map((ach) => (
              <div key={ach} className="p-4 rounded-2xl bg-orange-500/5 border-l-4 border-orange-500 text-white font-mono text-xs tracking-tight">
                {ach}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Subtle background text */}
      <div className="absolute top-20 right-[-5%] text-[15rem] font-black text-white/[0.02] select-none pointer-events-none uppercase">
        Projects
      </div>

      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">Deployments</span>
          </h2>
          <div className="h-1.5 w-24 bg-orange-600 rounded-full" />
        </div>

        <div className="space-y-20">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;