"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCountry } from "@/app/context/CountryContext";

const FeePlan = ({ feePlanData }) => {
  const router = useRouter();
  const { country: detectedCountry } = useCountry();
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    "United States of America",
    "Canada",
    "Australia",
    "New Zealand",
    "United Kingdom",
    "European Union",
  ];

  const europeanCountries = [
    "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", 
    "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", 
    "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", 
    "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden"
  ];

  const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", 
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", 
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", 
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
    "New Hampshire", "New Jersey", "New Mexico", "New York", 
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", 
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
    "West Virginia", "Wisconsin", "Wyoming"
  ];

  // Auto-select the detected country on component mount
  useEffect(() => {
    if (detectedCountry) {
      let countryToSet = detectedCountry;
      
      if (europeanCountries.includes(detectedCountry)) {
        countryToSet = "European Union";
      } else if (usStates.includes(detectedCountry)) {
        countryToSet = "United States of America";
      }
      
      // Only set if the country is in our supported countries list
      if (countries.includes(countryToSet)) {
        setSelectedCountry(countryToSet);
      } else {
        // Default to United States if detected country isn't supported
        setSelectedCountry("United States of America");
      }
    } else {
      // Default to United States if no country is detected
      setSelectedCountry("United States of America");
    }
  }, [detectedCountry]);

  const getCurrency = (country) => {
    switch (country) {
      case "United States of America":
        return { code: "USD", symbol: "$" };
      case "Canada":
        return { code: "CAD", symbol: "$" };
      case "Australia":
      case "New Zealand":
        return { code: "AUD", symbol: "$" };
      case "United Kingdom":
        return { code: "GBP", symbol: "£" };
      case "European Union":
        return { code: "EUR", symbol: "€" };
      default:
        return { code: "USD", symbol: "$" };
    }
  };

  const currency = getCurrency(selectedCountry);

  if (!selectedCountry) {
    return <div className="mx-auto max-w-7xl px-4 py-8 text-center">Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Choose Your Plan</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Select the perfect plan for your needs and start your journey today with our risk-free trial period.
        </p>
      </div>

      {/* Country Selector Tabs */}
      <div className="mb-6 flex justify-center overflow-x-auto">
        <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-gray-100 rounded-xl">
          {countries.map((c) => (
            <button
            aria-label="Select Country"
              key={c}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-all duration-200 ${
                selectedCountry === c ? "bg-teal-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCountry(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {feePlanData?.map((item) => {
          const priceDetail = item.monthlyPrice.find(
            (price) => price.currency === currency.code
          );

          return (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl bg-white p-4 transition-all duration-300 hover:shadow-lg border border-gray-200"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">{item.class}</h3>
                <span className="text-xs font-medium text-gray-500">/Hourly</span>
              </div>

              {priceDetail && (
                <div className="mb-4">
                  <div className="flex items-end">
                    <span className="text-2xl font-bold text-gray-900">
                      {currency.symbol}
                      {priceDetail.detail}
                    </span>
                    <span className="ml-1 text-xs text-gray-600">{priceDetail.currency}</span>
                  </div>
                </div>
              )}

              <p className="mb-4 text-xs text-gray-600">{item.detail}</p>

              <div className="mb-4 flex items-center gap-2 rounded-lg bg-gray-50 p-2 transition-all hover:bg-gray-100">
                <div className="relative h-5 w-5">
                  {priceDetail && (
                    <Image
                      src={priceDetail.icon}
                      alt="Country Icon"
                      fill
                      className="rounded-sm object-contain"
                    />
                  )}
                </div>
                <span className="text-xs font-medium text-gray-700">
                  {`${currency.symbol}${priceDetail?.detail} ${priceDetail?.currency} /Hour`}
                </span>
              </div>

              <button
              aria-label="Start Free Trial"
                onClick={() => router.push("/get-register")}
                className="w-full rounded-lg px-3 py-2 text-xs font-medium text-white bg-teal-600 transition-all hover:bg-teal-700"
              >
                Start Free Trial
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeePlan;