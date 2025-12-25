"use client";
import React, { useState } from "react";

export default function TutorApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cityCountry: "",
    subjects: "",
    qualification: "",
    workingHours: "",
    resume: null,
    video: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      id="application-form"
      className="max-w-4xl mx-auto px-6 py-16 bg-white rounded-3xl shadow-md border border-gray-100 my-6"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Tutor Application Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Info */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "fullName", label: "Full Name", type: "text" },
            { name: "email", label: "Email Address", type: "email" },
            { name: "phone", label: "Phone Number", type: "tel" },
            { name: "cityCountry", label: "City / Country", type: "text" },
          ].map((field) => (
            <div key={field.name} className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                required
              />
            </div>
          ))}
        </div>

        {/* Dropdowns */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Subjects You Teach
            </label>
            <select
              name="subjects"
              value={formData.subjects}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
              required
            >
              <option value="">Select Subject</option>
              <option value="Maths">Maths</option>
              <option value="English">English</option>
              <option value="Science">Science</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Languages">Languages</option>
              <option value="Early Learning">Early Learning</option>
              <option value="Spoken English">Spoken English</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Preferred Working Hours
            </label>
            <select
              name="workingHours"
              value={formData.workingHours}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
              required
            >
              <option value="">Select Hours</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>

        {/* Qualification */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">
            Qualification & Experience
          </label>
          <textarea
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            rows="4"
            className="border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
            placeholder="Example: B.Ed in English, 3 years tutoring A-Level students"
            required
          />
        </div>

        {/* File Uploads */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-2">
              Attach Resume / CV
            </label>
            <label className="relative cursor-pointer flex items-center justify-center border border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors py-3 text-sm font-medium text-gray-700">
              <span>
                {formData.resume ? formData.resume.name : "Choose File"}
              </span>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
                required
              />
            </label>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-2">
              Optional: Video Introduction (2–3 minutes)
            </label>
            <label className="relative cursor-pointer flex items-center justify-center border border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors py-3 text-sm font-medium text-gray-700">
              <span>{formData.video ? formData.video.name : "Choose File"}</span>
              <input
                type="file"
                name="video"
                accept="video/*"
                onChange={handleChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 text-center">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-teal-600 text-white rounded-full font-medium text-sm hover:bg-teal-700 transition-transform hover:scale-105 shadow-md"
          >
            Submit Application
          </button>
        </div>
      </form>
    </section>
  );
}
