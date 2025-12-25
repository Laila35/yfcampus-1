"use client";
import React from "react";
import LearningOutcomes from "./LearningOutcomes";
import PricingAndFreeTrial from "./PricingAndFreeTrial";

const LearningAndPricingSection = () => {
  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-24"
      aria-labelledby="learning-and-pricing-heading"
    >
      {/* Enhanced Heading & Intro */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2
          id="learning-and-pricing-heading"
          className="text-3xl font-bold text-gray-900 mb-6"
        >
          Learning Outcomes <span className="text-teal-600">& Affordable Tuition Plans</span>
        </h2>
       </div>

      {/* Enhanced Two Equal Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative">
         
            <LearningOutcomes />
        
        </div>
        
        <div className="relative">
        
            <PricingAndFreeTrial />
    
        </div>
      </div>
    </section>
  );
};

export default LearningAndPricingSection;