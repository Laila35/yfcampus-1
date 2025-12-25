"use client";
import { Mail, User, Phone, MessageSquare } from "lucide-react";
import React, { useState } from "react";

const QuickContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "General Question",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      inquiryType: "General Question",
      message: "",
    });
  };

  // Input common classes
  const inputClass =
    "peer w-full rounded-xl px-4 pt-5 pb-2 text-sm sm:text-base text-gray-800 placeholder-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 animate-pulseBorder transition-all duration-500";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-6 sm:p-8 space-y-6 hover:shadow-3xl transition-all duration-500 max-w-lg mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4">
        <span>💬</span> Quick Contact Form
      </h2>

      {/* Full Name */}
      <div className="relative">
        <User className="absolute left-3 top-3 text-gray-400 w-5 h-5 pointer-events-none" />
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className={inputClass}
          required
        />
        <label className="absolute left-10 top-2 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base pointer-events-none">
          Full Name
        </label>
      </div>

      {/* Email */}
      <div className="relative">
        <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5 pointer-events-none" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className={inputClass}
          required
        />
        <label className="absolute left-10 top-2 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base pointer-events-none">
          Email Address
        </label>
      </div>

      {/* Phone */}
      <div className="relative">
        <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5 pointer-events-none" />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className={inputClass}
        />
        <label className="absolute left-10 top-2 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base pointer-events-none">
          Phone Number (WhatsApp preferred)
        </label>
      </div>

      {/* Inquiry Type */}
      <select
        name="inquiryType"
        value={formData.inquiryType}
        onChange={handleChange}
        className={`${inputClass} bg-white cursor-pointer pl-4`}
      >
        <option>General Question</option>
        <option>Technical Support</option>
        <option>Payment</option>
        <option>Schedule Change</option>
        <option>Partnership</option>
        <option>Others</option>
      </select>

      {/* Message */}
      <div className="relative">
        <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5 pointer-events-none" />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          className={`${inputClass} h-28 resize-none pt-5`}
          required
        ></textarea>
        <label className="absolute left-10 top-2 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base pointer-events-none">
          Message / Details
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:from-yellow-500 hover:to-amber-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex justify-center items-center gap-2"
      >
        <Mail className="w-5 h-5" /> Submit Message
      </button>

      <p className="text-xs text-gray-500 text-center mt-2">
        Our team will reply via email or WhatsApp within 12 hours.
      </p>
    </form>
  );
};

export default QuickContactForm;
