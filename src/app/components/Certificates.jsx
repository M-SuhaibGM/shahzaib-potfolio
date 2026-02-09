"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AcademicCapIcon, XMarkIcon, MagnifyingGlassPlusIcon } from "@heroicons/react/24/outline";

const certs = [
  {
    id: 1,
    title: 'Intership Certificate',
    provider: 'Software House',
    thumbnail: '/pic1.jpg',
  },
  {
    id: 2,
    title: 'Udemy Course Certificate',
    provider: 'Web Development Bootcamp',
    thumbnail: '/udamy.jpg',
  },
];

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="py-20 px-4" id="certificates">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-2 mb-4">
          <AcademicCapIcon className="w-6 h-6 text-blue-500" />
          <span className="text-sm font-bold uppercase tracking-widest text-blue-500">Achievements</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter text-center">
          Certifications
        </h2>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certs.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedCert(cert)}
            className="group cursor-pointer relative rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={cert.thumbnail} 
                alt={cert.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <MagnifyingGlassPlusIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div className="p-4 bg-white dark:bg-[#121212]">
              <h3 className="font-bold text-slate-900 dark:text-white truncate">{cert.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cert.provider}</p>
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
            className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row h-full max-h-[85vh]">
                <div className="flex-1 bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src={selectedCert.thumbnail} 
                    alt={selectedCert.title} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-8 md:w-80 flex flex-col justify-center bg-white dark:bg-slate-900">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                    {selectedCert.title}
                  </h3>
                  <p className="text-blue-500 font-bold mt-2 uppercase text-xs tracking-widest">
                    {selectedCert.provider}
                  </p>
                  <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/10">
                    <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                      "Verified credential earned for demonstrating professional proficiency in the field."
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