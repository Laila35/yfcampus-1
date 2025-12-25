"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { SelectSubject } from "./SelectSubjext";
import SelectTimeDuration from "./SelectTimeDuration";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    grade: "",
    subject: "",
    duration: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex justify-center items-center mt-10 sm:mt-14 md:mt-16 mb-16 md:mb-20 px-3 sm:px-4 md:px-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 md:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-600 leading-tight">
            Quick Registration Form
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Please provide a few basic details to get started.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label className="text-gray-700 font-medium">
                Full Name (Parent or Student)
              </Label>
              <Input
                type="text"
                placeholder="Enter full name"
                name="fullName"
                onChange={handleChange}
                className="mt-2 h-12 border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <Label className="text-gray-700 font-medium">Email Address</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={handleChange}
                className="mt-2 h-12 border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <Label className="text-gray-700 font-medium">
                Phone Number (include country code)
              </Label>
              <Input
                type="tel"
                placeholder="+44 7123 456789"
                name="phone"
                onChange={handleChange}
                className="mt-2 h-12 border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <Label className="text-gray-700 font-medium">
                Grade / Year Level
              </Label>
              <Input
                type="text"
                placeholder="e.g., Year 6"
                name="grade"
                onChange={handleChange}
                className="mt-2 h-12 border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label className="text-gray-700 font-medium">
                Subject(s) Interested In
              </Label>
              <div className="mt-2">
                <SelectSubject
                  onChange={(val) =>
                    setFormData((prev) => ({ ...prev, subject: val }))
                  }
                />
              </div>
            </div>

            <div>
              <SelectTimeDuration
                onChange={(val) =>
                  setFormData((prev) => ({ ...prev, duration: val }))
                }
              />
            </div>
          </div>

          <div>
            <Label className="text-gray-700 font-medium">
              Message or Notes (optional)
            </Label>
            <Textarea
              placeholder="Any additional details or notes..."
              name="message"
              onChange={handleChange}
              className="mt-2 border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 sm:py-5 md:py-6 rounded-xl text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Submit Form
          </Button>

          <p className="text-xs sm:text-sm text-gray-500 text-center mt-5 leading-relaxed">
            💡 Once submitted, you’ll receive a WhatsApp confirmation within{" "}
            <span className="text-teal-600 font-medium">24 hours</span> to
            schedule your free trial session.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Registration;
