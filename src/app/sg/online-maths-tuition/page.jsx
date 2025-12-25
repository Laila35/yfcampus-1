"use client"
import React, { useEffect } from 'react';
import { useCountry } from '@/app/context/CountryContext';
import { useRouter } from "next/navigation";

const SgMathematics = () => {
  const { country } = useCountry()
  const router = useRouter();


  useEffect(() => {
    if (country) {

      if (country === 'Singapore') {

        return;
      } else {

        switch (country) {
          case 'Canada':
            router.push('/ca/online-math-tuition');
            break;
          case 'Australia':
            router.push('/au/online-maths-tuition');
            break;
          case 'Philippines':
            router.push('/ph/online-maths-tuition');
            break;
          case 'Malaysia':
            router.push('/my/online-maths-tuition');
            break;
          case 'New Zealand':
            router.push('/nz/online-maths-tuition');
            break;
          case 'United States':
            router.push('/us/online-math-tuition');
            break;
          case 'United Kingdom':
            router.push('/uk/online-maths-tuition');
            break;
          case 'India ':
            router.push('/in/online-maths-tuition');
            break;
          case 'Hong Kong':
            router.push('/hk/online-maths-tuition');
            break;
          case 'United Arab Emirates':
            router.push('/ae/online-maths-tuition');
            break;
          case 'South Africa':
            router.push('/za/online-maths-tuition');
            break;
          default:
            router.push('/online-maths-tuition'); // Default fallback for math
        }
      }
    }
  }, [country, router]);
  if (!country || country !== 'Singapore') {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <div className="loader mb-4"></div>
          <h2 className="text-xl font-semibold">Loading, please wait...</h2>
        </div>
      </div>
    );
  }


  return (
    <>
      {country === 'Singapore' && (
        <div>
          Singapore mathematics page will be here soon
        </div>
      )}
    </>
  );
};

export default SgMathematics;
