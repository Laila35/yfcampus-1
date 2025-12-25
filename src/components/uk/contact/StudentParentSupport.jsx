"use client";
import React from "react";
import {
  CalendarCheck,
  CreditCard,
  Laptop,
  BarChart3,
  MessageCircle,
} from "lucide-react";

const iconMap = {
  CalendarCheck,
  CreditCard,
  Laptop,
  BarChart3,
  MessageCircle,
};

const StudentParentSupport = ({
 
   

}) => {
  const number=" +44 7532 792318"
  const   supportItems=[
    {
      text:"Lesson rescheduling",
      icon:"CalendarCheck"
    },
    {
      text:"Account or payment queries",
      icon:"CreditCard"
    },
    {
      text:" Technical setup (Zoom / Skype / Meet)",
      icon:"Laptop"
    },
    {
      text:"Student progress reports",
      icon:"BarChart3"
    }
  ]
  return (
    <section className="relative py-20 px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl  font-bold text-gray-900 tracking-tight">
          Student & Parent Support
        </h2>
        <div className="w-24 h-1.5 mx-auto mt-3 bg-gradient-to-r from-teal-500 to-amber-400 rounded-full"></div>
        <p className="text-gray-600 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
          Need help with your current account or class?
 Our admin team can assist with:

        </p>
      </div>

      {/* Support Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {supportItems.map(({ icon, text }, index) => {
          const Icon = iconMap[icon];
          return (
            <div
              key={index}
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-5 hover:border-teal-200"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex-shrink-0">
                {Icon && <Icon className="w-6 h-6" />}
              </div>
              <p className="text-gray-800 text-base font-semibold">{text}</p>
            </div>
          );
        })}
      </div>

      {/* Footer / CTA */}
      <div className="max-w-3xl mx-auto text-center border-t border-gray-200 pt-8">
      <p>  Use the form above or message us directly on WhatsApp for instant support.</p>
        <a
          href={`https://wa.me/${number}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-teal-500 to-amber-400 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default StudentParentSupport;
