"use client";
import React from "react";
import { UserCheck, Presentation, BarChart3 } from "lucide-react";
import { title } from "node_modules/@prismicio/client/dist/helpers/isFilled";
import { icon } from "@fortawesome/fontawesome-svg-core";
const iconMap = { UserCheck, Presentation, BarChart3 };
const TeachingPhilosophy = () => {
   const pillars = [
     {
      title:" Personalised Attention ",
      icon:"UserCheck",
      desc:" One-to-one sessions focused on each student’s goals and learning pace.",
     },
     {
      title:"Interactive Tools",
      icon:"Presentation",
      desc:"Real-time whiteboards, visual aids, and shared notes for better understanding.",
     },{
      title:" Progress & Feedback",
      icon:"BarChart3",
      desc:"Regular performance reports for parents to track development."
     }
   ]
   

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-14 space-y-4">
        <h2 className="text-3xl   font-bold text-gray-900">
          Our Teaching Philosophy
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
         We believe that every student learns differently.
 Our teaching approach is built on three key pillars.

        </p>
      </div>

      {/* Pillars */}
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => 
        {
          const Icon=iconMap[pillar.icon]
        return  (
          <div
            key={index}
            className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              <div className="bg-teal-50 p-3 rounded-xl group-hover:bg-teal-100 transition-colors">
                <Icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {pillar.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-base">
              {pillar.desc}
            </p>
          </div>
        )
        }
        )}
      </div>
    </section>
  );
};

export default TeachingPhilosophy;
