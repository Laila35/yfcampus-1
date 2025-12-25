"use client";
import React from "react";
import { Phone, Mail, Globe, Clock, MapPin, PhoneCall } from "lucide-react";

const iconMap = { Phone, Mail, Globe, Clock, MapPin };

const ContactDetails = () => {
  const details = [
    { label: "WhatsApp / Call", value: "+44 7532 792318", icon: "Phone" },
    { label: "Email", value: "admin@yfcampus.com", icon: "Mail" },
    { label: "Website", value: "www.yfcampus.com", icon: "Globe" },
    { label: "Office Hours", value: "Monday–Saturday, 9:00 AM – 8:00 PM (UK Time)", icon: "Clock" },
    { label: "Serving Areas", value: "United Kingdom, Europe, USA, Canada, Australia & Worldwide", icon: "MapPin" },
  ];

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <PhoneCall size={22} className="text-teal-600" />
        <span>Contact Details</span>
      </h2>

      <ul className="space-y-4">
        {details.map(({ icon, label, value }, i) => {
          const Icon = iconMap[icon];
          return (
            <li key={i} className="flex items-start gap-4 sm:gap-5">
              
              {/* Icon with gradient bg + hover */}
              <div className="p-3 bg-gradient-to-br from-teal-100 to-teal-200 text-teal-700 rounded-xl shadow-md flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center">
                <Icon size={20} />
              </div>

              {/* Label and Value */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  {label}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm break-words">
                  {value}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactDetails;
