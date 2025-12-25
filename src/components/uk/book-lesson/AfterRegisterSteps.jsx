"use client";

import React from "react";
import { ClipboardList, UserCheck, Video, TrendingUp } from "lucide-react";

const iconMap = { ClipboardList, UserCheck, Video, TrendingUp };

const AfterRegisterSteps = ( ) => {
    const steps = [
  {
    title: "Step 1: Quick Assessment",
    description:
      "We’ll ask a few short questions or share a simple worksheet to assess your child’s level.",
    icon: "ClipboardList"
  },
  {
    title: "Step 2: Tutor Match",
    description:
      "Our team will assign a UK-qualified tutor best suited for your child’s learning goals.",
    icon: "UserCheck"
  },
  {
    title: "Step 3: Free Trial Lesson",
    description:
      "You’ll receive your Zoom / Skype class link and a confirmation message before the session.",
    icon: "Video"
  },
  {
    title: "Step 4: Progress Feedback",
    description:
      "After the trial, we’ll share the tutor’s feedback and next-step recommendations.",
    icon: "TrendingUp"
  }
];

    return (
        <section className="relative max-w-5xl mx-auto py-20 px-6 sm:px-8">
            {/* Header */}
            <div className="text-center mb-14">
                <h2 className="text-3xl   font-bold text-teal-600 mb-4 tracking-tight">
                    What Happens After You Register
                </h2>
                <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    A simple, transparent process to match your child with the
                    perfect tutor
                </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {steps.map((step, index) => {
                    const Icon = iconMap[step.icon?.trim()] ?? TrendingUp;

                    return (
                        <div
                            key={index}
                            className="relative group bg-white/80 rounded-2xl p-6 pt-16 border border-teal-200 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <div className="absolute -top-7 w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center shadow-lg">
                                <Icon
                                    size={28}
                                    strokeWidth={2.5}
                                    className="text-white transform group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-teal-900 mb-2 mt-4">
                                {step.title}
                            </h3>
                            <p className="text-teal-700 text-sm sm:text-base leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Background Decoration */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-72 h-72 bg-gradient-to-r from-teal-100/40 to-teal-50/40 rounded-full blur-3xl opacity-40 -z-10" />
        </section>
    );
};

export default AfterRegisterSteps;
