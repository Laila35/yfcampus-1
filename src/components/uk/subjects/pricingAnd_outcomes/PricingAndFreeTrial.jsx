"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const PricingAndFreeTrial = () => {
  return (
    <div
      className="flex flex-col justify-between border border-gray-200 rounded-2xl p-8 bg-white
      shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(13,148,136,0.15)]
      transition-all duration-300 h-full"
    >
      <div>
        <h3 className="text-xl font-bold  mb-5">
          Pricing & Free Trial
        </h3>
        <p className="text-gray-700 mb-8">
          All subjects are available in 30-minute and 1-hour sessions starting
          from affordable monthly plans. Choose the right option for your child’s
          learning journey.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
        <Link
          href="/uk/pricing"
          className="flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 w-full sm:w-1/2"
        >
          View Pricing <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/uk/free-trial"
          className="flex items-center justify-center gap-2 border border-teal-600 text-teal-700 px-6 py-3 rounded-lg hover:bg-teal-600 hover:text-white transition-all duration-300 w-full sm:w-1/2"
        >
          Book Free Trial <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default PricingAndFreeTrial;
