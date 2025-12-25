"use client";
import React from "react";
import { motion } from "framer-motion";

const CoreTopics = ({ core_topics ,core_topics_cta}) => {
  return (
    <section className="relative py-24 px-6 md:px-16   overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute   pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-500"
        >
          Core Topics Covered
        </motion.h1>

         
        {/* Topics Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {core_topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-teal-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-8 text-left"
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-t-2xl transition-all duration-500" />

              <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                {topic.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {topic.description}
              </p>
            </motion.div>
          ))}

        </div>
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12"
        >
          <a
            href= "#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-2xl transition-transform hover:-translate-y-1 "
          >
            {core_topics_cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreTopics;
