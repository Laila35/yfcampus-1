"use client";
import FeePlan from "@/components/landingPage/FeePlans";
import Link from "next/link";
import Script from "next/script";

const Pricing = () => {
  const feePlanData = [
    {
      id: 1,
      class: "Primary Tuition (Year 1-6)",
      detail: "Comprehensive primary education covering core subjects including Mathematics, English, Science, and Humanities. Our experienced tutors provide personalized attention to build strong foundational skills with interactive lessons and regular progress tracking.",
      monthlyPrice: [
        { id: 1, icon: "/Images/Icons/Country/usa.webp", detail: 8, currency: "USD" },
        { id: 2, icon: "/Images/Icons/Country/cad.webp", detail: 11.43, currency: "CAD" },
        { id: 3, icon: "/Images/Icons/Country/aud.webp", detail: 12.67, currency: "AUD" },
        { id: 4, icon: "/Images/Icons/Country/uk.webp", detail: 6.18, currency: "GBP" },
        { id: 5, icon: "/Images/Icons/Country/eur.webp", detail: 7.41, currency: "EUR" },
      ],
      features: [
        "Personalized learning plans",
        "Interactive digital whiteboard",
        "Weekly progress reports",
        "Homework support",
        "2 sessions per week"
      ],
      popular: false
    },
    {
      id: 2,
      class: "Secondary Tuition (Year 7-10)",
      detail: "Specialized secondary education program designed to bridge the gap between primary and exam years. Focuses on critical thinking, exam techniques, and subject mastery across STEM and Arts disciplines with subject-specialist tutors.",
      monthlyPrice: [
        { id: 1, icon: "/Images/Icons/Country/usa.webp", detail: 12, currency: "USD" },
        { id: 2, icon: "/Images/Icons/Country/cad.webp", detail: 17.14, currency: "CAD" },
        { id: 3, icon: "/Images/Icons/Country/aud.webp", detail: 19.00, currency: "AUD" },
        { id: 4, icon: "/Images/Icons/Country/uk.webp", detail: 9.27, currency: "GBP" },
        { id: 5, icon: "/Images/Icons/Country/eur.webp", detail: 11.12, currency: "EUR" },
      ],
      features: [
        "Subject-specific tutors",
        "Exam strategy workshops",
        "Monthly mock tests",
        "University pathway guidance",
        "3 sessions per week"
      ],
      popular: true
    },
    {
      id: 3,
      class: "GCSE Tuition (Year 11+)",
      detail: "Intensive GCSE preparation program with exam-focused tutoring, past paper practice, and personalized revision strategies. Our tutors are experts in the UK curriculum and examination requirements, providing targeted support for top grades.",
      monthlyPrice: [
        { id: 1, icon: "/Images/Icons/Country/usa.webp", detail: 15, currency: "USD" },
        { id: 2, icon: "/Images/Icons/Country/cad.webp", detail: 21.42, currency: "CAD" },
        { id: 3, icon: "/Images/Icons/Country/aud.webp", detail: 23.75, currency: "AUD" },
        { id: 4, icon: "/Images/Icons/Country/uk.webp", detail: 11.58, currency: "GBP" },
        { id: 5, icon: "/Images/Icons/Country/eur.webp", detail: 13.89, currency: "EUR" },
      ],
      features: [
        "Guaranteed exam-board specialists",
        "Unlimited past paper access",
        "Priority tutor matching",
        "24/7 question support",
        "4 sessions per week"
      ],
      popular: false
    },
  ];

  return (
    <>
     <head>
  {/* Basic Meta Tags */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Your Future Campus (YFC)" />

  {/* Title */}
  <title>Online Tuition Pricing | Affordable Plans – Your Future Campus (YFC)</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Explore affordable online tuition plans with Your Future Campus (YFC). Pricing for Primary, Secondary & GCSE students. Get family discounts, flexible packages, and expert-led sessions tailored to your needs."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="online tuition pricing, YFC tuition fees, affordable tutoring plans, GCSE online classes, primary tuition rates, secondary school tuition, flexible tutoring packages, family discount tutoring, personalized online learning"
  />

  {/* Open Graph (OG) Meta Tags */}
  <meta property="og:title" content="Online Tuition Pricing | Affordable Plans – Your Future Campus (YFC)" />
  <meta
    property="og:description"
    content="Discover transparent and budget-friendly online tuition pricing for all levels. Join YFC for expert instruction in Maths, Science, English, and more."
  />
  <meta property="og:image" content="https://yfcampus.com/images/payments.png" />
  <meta property="og:url" content="https://yfcampus.com/pricing" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Your Future Campus (YFC)" />
  <meta property="og:locale" content="en_US" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Online Tuition Pricing | Affordable Plans – Your Future Campus (YFC)" />
  <meta name="twitter:description" content="Affordable and flexible online tuition packages from YFC. Get started with Primary, Secondary, and GCSE level courses today." />
  <meta name="twitter:image" content="https://yfcampus.com/images/payments.png" />
  <meta name="twitter:url" content="https://yfcampus.com/pricing" />
  <meta name="twitter:site" content="@YFC_Global" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://yfcampus.com/pricing" />

  {/* JSON-LD Structured Data */}
  <Script
    id="jsonld-pricing"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Online Tuition Packages – Your Future Campus (YFC)",
        image: "https://yfcampus.com/Images/payments.png",
        description:
          "Affordable and expert-led online tuition for Primary, Secondary, and GCSE students. Flexible pricing plans, family discounts, and personalized support available worldwide.",
        brand: {
          "@type": "Organization",
          name: "Your Future Campus",
          logo: "https://yfcampus.com/Images/yfc-logo.png",
        },
        offers: [
          {
            "@type": "Offer",
            priceCurrency: "GBP",
            price: "25.00",
            priceValidUntil: "2025-12-31",
            itemOffered: {
              "@type": "Service",
              name: "Primary Level Online Tuition",
            },
            availability: "https://schema.org/InStock",
            url: "https://yfcampus.com/pricing",
          },
          {
            "@type": "Offer",
            priceCurrency: "GBP",
            price: "30.00",
            priceValidUntil: "2025-12-31",
            itemOffered: {
              "@type": "Service",
              name: "Secondary Level Online Tuition",
            },
            availability: "https://schema.org/InStock",
            url: "https://yfcampus.com/pricing",
          },
          {
            "@type": "Offer",
            priceCurrency: "GBP",
            price: "35.00",
            priceValidUntil: "2025-12-31",
            itemOffered: {
              "@type": "Service",
              name: "GCSE Online Tuition",
            },
            availability: "https://schema.org/InStock",
            url: "https://yfcampus.com/pricing",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "154",
        },
        review: [
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Parent Reviewer",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody: "Very affordable and high-quality tutoring. My child improved significantly!"
          }
        ]
      }),
    }}
  />
</head>


    <div className="bg-gradient-to-b from-teal-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-teal-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Transparent Pricing
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
            Quality education at affordable rates with flexible payment options
          </p>
        </div>

        {/* Fee Plans */} 
        <FeePlan feePlanData={feePlanData} />

        {/* Additional Information */}
        <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Family Discount */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-teal-100 transform hover:scale-105 transition-transform">
            <div className="flex justify-center mb-6">
              <div className="bg-teal-100 p-4 rounded-full">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-center text-xl font-bold text-teal-900 mb-3">Family Discount</h3>
            <p className="text-center text-gray-700">
              Up to <span className="font-bold text-teal-700">45% discount</span> for additional students from the same family. The more siblings enroll, the bigger the savings!
            </p>
          </div>

          {/* Referral Discount */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-teal-100 transform hover:scale-105 transition-transform">
            <div className="flex justify-center mb-6">
              <div className="bg-teal-100 p-4 rounded-full">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <h3 className="text-center text-xl font-bold text-teal-900 mb-3">Referral Program</h3>
            <p className="text-center text-gray-700">
              Earn a <span className="font-bold text-teal-700">40% discount</span> for every successful referral. Share the gift of learning and save on your tuition!
            </p>
          </div>

          {/* Payment Methods */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-teal-100 transform hover:scale-105 transition-transform">
            <div className="flex justify-center mb-6">
              <div className="bg-teal-100 p-4 rounded-full">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
            </div>
            <h3 className="text-center text-xl font-bold text-teal-900 mb-3">Flexible Payments</h3>
            <p className="text-center text-gray-700">
              We accept Debit/Credit Cards, PayPal, Bank Transfer, and Money Transfer. Choose what works best for you!
            </p>
          </div>

          {/* Free Assessment */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-teal-100 transform hover:scale-105 transition-transform">
            <div className="flex justify-center mb-6">
              <div className="bg-teal-100 p-4 rounded-full">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-center text-xl font-bold text-teal-900 mb-3">Free Assessment</h3>
            <p className="text-center text-gray-700">
              Our comprehensive assessment ensures we match your child with the perfect tutor and learning plan - completely free!
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-24 bg-teal-700 rounded-xl p-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="h-12 w-12 mx-auto text-teal-300" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="mt-6 text-xl font-medium">
              "The GCSE program was transformative for my daughter. Her grades improved by two levels in just 6 months, and she gained so much confidence in her abilities. Worth every penny!"
            </p>
            <p className="mt-6 font-bold">Sarah Johnson</p>
            <p className="text-teal-200">Parent of Year 11 Student</p>
          </div>
        </div>



        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-extrabold text-teal-900 sm:text-4xl">
            Ready to unlock your child's potential?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get started with a free assessment session today
          </p>
          <div className="mt-8">
            <Link aria-label="Book free assessment" href="/get-register" className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              Book Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Pricing;