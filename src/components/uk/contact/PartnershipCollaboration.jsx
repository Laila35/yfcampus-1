"use client";
import React from "react";
import { Users, GraduationCap, Handshake, Globe } from "lucide-react";

const iconMap = {
  Users,
  GraduationCap,
  Handshake,
  Globe,
};

const PartnershipCollaboration = ( ) => {
 
const partners=[
  {
    title:"UK schools and tuition centres",
    icon:"Users"
  },{
    title:"Educational consultants and advisors",
    icon:"GraduationCap"
  },
  {
    title:"Non-profits supporting education access",
    icon:"Handshake"
  },
  {
    title:"Content creators and learning resource providers",
    icon:"Globe"
  }
]
  

  return (
    <section className="relative py-20 px-6   overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl   font-semibold text-gray-900">
          Partnership & Collaboration
        </h2>
        <div className="w-24 h-1 bg-teal-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
         We welcome collaborations with:

        </p>
      </div>

      {/* Partner Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {partners.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-500 to-amber-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="mb-4">
                <Icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
     <div className="text-center mt-12 md:mt-16 max-w-2xl mx-auto px-4">
  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
    For partnership proposals, please email{" "}
    <a
      href="mailto:admin@yfcampus.com?subject=Partnership Inquiry – UK"
      className="text-teal-600 font-medium hover:underline"
    >
      admin@yfcampus.com
    </a>{" "}
    with <strong>“Partnership Inquiry – UK”</strong> in the subject line.
  </p>
</div>

    </section>
  );
};

export default PartnershipCollaboration;
