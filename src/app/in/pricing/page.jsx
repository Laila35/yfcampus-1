"use client";

const Pricing = () => {
  return (
    <>
      <head>
        {/* Basic Meta Tags */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="YFCampus" />

        {/* Title */}
        <title>YFCampus Tuition Pricing: Affordable Primary, Secondary & GCSE Tuition</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Discover affordable tuition pricing for Primary, Secondary, and GCSE students at YFCampus. Offering personalized lessons with flexible rates, family discounts, and additional services like assignment help."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="YFCampus tuition, primary tuition, secondary tuition, GCSE tuition, affordable tutoring, online learning, assignment help, family discount, exam assistance, quizzes, private tutoring"
        />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="YFCampus Tuition Pricing: Affordable Primary, Secondary & GCSE Tuition" />
        <meta property="og:description" content="Discover affordable tuition pricing for Primary, Secondary, and GCSE students at YFCampus. Offering personalized lessons with flexible rates, family discounts, and additional services like assignment help." />
        <meta property="og:image" content="https://yfcampus.com/images/tuition-pricing-banner.jpg" />
        <meta property="og:url" content="https://yfcampus.com/pricing" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YFCampus Tuition Pricing: Affordable Primary, Secondary & GCSE Tuition" />
        <meta name="twitter:description" content="Discover affordable tuition pricing for Primary, Secondary, and GCSE students at YFCampus. Offering personalized lessons with flexible rates, family discounts, and additional services like assignment help." />
        <meta name="twitter:image" content="https://yfcampus.com/images/tuition-pricing-banner.jpg" />
        <meta name="twitter:url" content="https://yfcampus.com/pricing" />

        {/* Favicon */}
        {/* <link rel="icon" href="https://yfcampus.com/favicon.ico" type="image/x-icon" /> */}

        {/* Canonical URL */}
        <link aria-label="yfcampus pircing" rel="canonical" href="https://yfcampus.com/pricing" />

        {/* Additional Meta Tags */}
        <meta property="og:site_name" content="YFCampus" />
        <meta property="og:locale" content="en_US" />
      </head>

      <div className="flex flex-wrap justify-center gap-8 mx-auto w-[85%] mt-10">
    {/* Pricing Cards */}
    {[
      {
        title: "Primary Tuition (Year 1-6)",
        priceINR: "546.78 INR/hour",
      },
      {
        title: "Secondary Tuition (Year 7-10)",
        priceINR: "765.49 INR/hour",
      },
      {
        title: "GCSE Tuition (Year 11+)",
        priceINR: "985.20 INR/hour",
      },
    ].map((tuition) => (
      <div key={tuition.title} className="border-2 border-teal-600 rounded-lg p-6 md:p-12 w-full lg:w-[44%] xl:w-[30%] 2xl:w-[25%] shadow-lg">
        <div className="text-center text-teal-900 font-bold text-[18px] lg:text-[26px] mb-2">
          {tuition.title}
          <br />
          <span className="text-[#007B7B] bg-yellow-200 px-2 py-1 rounded font-semibold text-[20px] lg:text-[24px]">
            {tuition.priceINR}
          </span>
        </div>
        <div className="text-center text-gray-800 font-medium text-[16px] lg:text-[18px]">
          Monthly billing cycle with payments in advance.
        </div>
      </div>
    ))}
    
    {/* Assignment Help and Additional Services */}
    <div className="border-2 border-teal-600 rounded-lg p-6 md:p-12 w-full lg:w-[44%] xl:w-[30%] 2xl:w-[25%] shadow-lg">
      <div className="text-center text-teal-900 font-bold text-[18px] lg:text-[26px] mb-2">
        Assignment Help & Additional Services
      </div>
      <div className="text-right text-gray-800 font-medium text-[16px] lg:text-[18px]">
        <div className="mt-2">
          Primary: <span className="text-[#007B7B] bg-yellow-200 px-2 py-1 rounded">1,640.34 INR/hour</span><br />
        </div>
        <div className="mt-2">
          Secondary: <span className="text-[#007B7B] bg-yellow-200 px-2 py-1 rounded">2,187.12 INR/hour</span><br />
        </div>
        <div className="mt-2">
          GCSE: <span className="text-[#007B7B] bg-yellow-200 px-2 py-1 rounded">3,280.68 INR/hour</span><br />
        </div>
      </div>
    </div>
</div>


      <div className="text-center mt-12">
        {/* Family Discount */}
        <div className="text-teal-900 font-bold text-[22px] lg:text-[26px] mb-4">Family Discount</div>
        <div className="text-gray-700 font-medium text-[16px] lg:text-[18px] mb-6">Up to 45% discount for additional students from the same family.</div>

        {/* Referral Discount */}
        <div className="text-teal-900 font-bold text-[22px] lg:text-[26px] mb-4">Referral Discount</div>
        <div className="text-gray-700 font-medium text-[16px] lg:text-[18px] mb-6">40% discount for every successful referral.</div>

        {/* Payment Methods */}
        <div className="text-teal-900 font-bold text-[22px] lg:text-[26px] mb-4">Payment Methods</div>
        <div className="text-gray-700 font-medium text-[16px] lg:text-[18px] mb-6">
          We accept Debit/Credit Card, PayPal, Bank Transfer, and Money Transfer Remittance.
        </div>

        {/* Free Assessment */}
        <div className="text-teal-900 font-bold text-[22px] lg:text-[26px] mb-4">Free Assessment</div>
        <div className="text-gray-700 font-medium text-[16px] lg:text-[18px] mb-8">
          Our free assessment ensures personalized services tailored to your learning needs.
        </div>
      </div>
    </>
  );
};

export default Pricing;
