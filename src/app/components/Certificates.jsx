"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AcademicCapIcon, XMarkIcon, MagnifyingGlassPlusIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const certs = [
  {
    id: 1,
    title: 'Internship Certificate',
    provider: 'NIT-Services',
    thumbnail: '/intern.jpg',
    issueDate: '2024',
  },
  {
    id: 2,
    title: 'Kubernetes and Cloud Native Associate (KCNA)',
    provider: 'Kodekloud',
    thumbnail: '/KCNA Certificate_page-0001.jpg',
    issueDate: '2024',
  },
  {
    id: 3,
    title: 'Helm for Beginners',
    provider: 'Kodekloud',
    thumbnail: '/Helm Certificate_page-0001.jpg',
    issueDate: '2024',
  },
  {
    id: 4,
    title: 'Certificate of Membership',
    provider: 'Pakistan Freelancers Association',
    thumbnail: '/Certificate of Membership.pdf.png',
    issueDate: '2024',
  },
  {
    id: 5,
    title: 'AWS Technical Essentials',
    provider: 'Coursera',
    thumbnail: '/AWS Technical Essentials by Coursera_page-0001.jpg',
    issueDate: '2024',
  },
  {
    id: 6,
    title: 'Certified DevOps on AWS Specialization',
    provider: 'Coursera',
    thumbnail: '/Certified DevOps on AWS Specialization_page-0001.jpg',
    issueDate: '2025',
  },
  {
    id: 7,
    title: 'Google Soft Skills Program',
    provider: 'Google',
    thumbnail: '/google-soft-skills-program-6243-2241835469037371-1733036798_page-0001.jpg',
    issueDate: '2024',
  },
  {
    id: 8,
    title: 'Course-Certificate_Docker-Training-Course',
    provider: 'Coursera',
    thumbnail: '/Course-Certificate_Docker-Training-Course-for-the-Absolute-Beginner_Shahzaib_page-0001.jpg',
    issueDate: '2024',
  },

];

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="py-24 px-4 relative" id="certificates">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-4"
        >
          <ShieldCheckIcon className="w-6 h-6 text-orange-500" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-orange-500">Verified_Credentials</span>
        </motion.div>
        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter text-center">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Certifications</span>
        </h2>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certs.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8 }}
            onClick={() => setSelectedCert(cert)}
            className="group cursor-pointer relative rounded-[2rem] overflow-hidden bg-amber-950/40 border border-orange-500/10 hover:border-orange-500/40 shadow-2xl transition-all backdrop-blur-sm"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={cert.thumbnail}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-amber-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-[2px]">
                <MagnifyingGlassPlusIcon className="w-12 h-12 text-orange-500 mb-2" />
                <span className="text-white font-mono text-xs tracking-widest uppercase">Inspect Credential</span>
              </div>
              <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-tighter">
                {cert.issueDate}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-b from-amber-950/80 to-amber-950">
              <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-orange-400 transition-colors">
                {cert.title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-sm font-mono text-amber-100/40">{cert.provider}</p>
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-orange-500/30 rounded-full" />)}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Integrated Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-amber-950/95 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full bg-amber-900 border border-orange-500/30 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 z-10 p-3 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white transition-all active:scale-90"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                <div className="flex-1 bg-amber-950 p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedCert.thumbnail}
                    alt={selectedCert.title}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                </div>
                <div className="p-10 lg:w-96 flex flex-col justify-center bg-gradient-to-br from-amber-900 to-amber-950">
                  <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full" />
                  <h3 className="text-3xl font-black text-white leading-tight mb-4">
                    {selectedCert.title}
                  </h3>
                  <p className="text-orange-400 font-mono font-bold uppercase text-sm tracking-widest mb-8">
                    Issued by: {selectedCert.provider}
                  </p>

                  <div className="space-y-4 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <p className="text-xs font-mono text-amber-100/60 uppercase tracking-tighter">Status: Authenticated</p>
                    </div>
                    <p className="text-sm text-amber-100/40 italic font-light leading-relaxed">
                      "This credential confirms that the recipient has completed the rigorous training and evaluation required for professional industry standards."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;