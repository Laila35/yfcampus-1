"use client";
import React from "react";
import ContactDetails from "./ContactDetails";
import QuickContactForm from "./QuickContactForm";

const ContactInfoAccent = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
      
      {/* Left - Contact Details */}
      <div className="relative p-6 sm:p-8 rounded-3xl  bg-gradient-to-br from-teal-200 to-tea hover:shadow-3xl transition-all duration-500">
        <ContactDetails />
      </div>

      {/* Right - Contact Form */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-tr from-amber-400 to-amber-200 hover:shadow-3xl   transition-all duration-500">
        <QuickContactForm />
      </div>

    </section>
  );
};

export default ContactInfoAccent;
