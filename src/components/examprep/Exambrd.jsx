
"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ExamBoards = ({ examBoards = [] }) => {
 
  return (
    <section className="p-8 md:p-12 rounded-2xl mt-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-3 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
          Exam Boards
        </h2>
      </div>

      <div className="grid gap-5 max-w-4xl mx-auto mb-8">
        {examBoards.map((board, idx) => (
          
          <Link
            key={idx}
            href={board.href}
            className="group relative p-6 bg-white rounded-xl border border-gray-200 hover:border-teal-400 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] overflow-hidden"
          >
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-4">
               
                {board.image && (
                  <Image
                    src={board.image}
                    alt={board.name}
                    width={50}
                    height={50}
                    className="rounded-lg w-12 h-12 object-cover"
                  />
                )}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-700 transition-colors duration-300">
                    {board.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{board.cta}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-teal-600 font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  Explore
                </span>
                <div className="w-10 h-10 bg-teal-100 group-hover:bg-teal-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <ArrowRight className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExamBoards;
