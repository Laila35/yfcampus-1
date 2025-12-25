"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ExamStructure = ({ examStr }) => {
  return (
    <section className="py-20 px-6 md:px-16 ">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold text-teal-700 mb-10"
        >
          AQA Exam Structure
        </motion.h1>

        {/* Exam Structure Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {examStr.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              {/* Exam Icon */}
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src={item.icon}
                  alt={item.alt || "Exam Paper"}
                  fill
                  sizes="80px"
                  className="object-contain"
                  priority={index === 0} // preload first icon for faster render
                />
              </div>

              {/* Exam Title */}
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>

              {/* Optional Description */}
              {item.description && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamStructure;
