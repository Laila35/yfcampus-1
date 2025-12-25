import Banner from "@/components/Banner";
import React from "react";
import Register from "@/components/landingPage/Register";
import Script from "next/script";

const ContactUs = () => {
  const breadcrumbData = {
    id: 1,
    name: "Contact Us",
    link: "/contact-us",
  };

  return (
    <>
      <head>
        <title>Contact Us | Your Future Campus (YFC) - 24/7 Online Tutoring Support</title>
        <meta
          name="description"
          content="Get in touch with Your Future Campus (YFC) for expert online tutoring support. Reach out for queries, free trial classes, or partnership opportunities. We're here to help 24/7."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Primary Keywords for SEO */}
        <meta
          name="keywords"
          content="Contact YFC, Online Tutoring Support, Free Trial Classes, Talk to Tutors, Online Tuition Help, Customer Support, Your Future Campus Contact"
        />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta
          property="og:title"
          content="Contact Us | Your Future Campus (YFC) - 24/7 Online Tutoring Support"
        />
        <meta
          property="og:description"
          content="Need help with online tuition? Contact Your Future Campus (YFC) for support, class inquiries, or trial sessions. Available 24/7 to guide you."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yfcampus.com/contact-us" />
        <meta
          property="og:image"
          content="https://yfcampus.com/Images/hero_image.webp"
        />
        <meta property="og:site_name" content="Your Future Campus (YFC)" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us | Your Future Campus (YFC) - 24/7 Online Tutoring Support"
        />
        <meta
          name="twitter:description"
          content="Reach out to YFC for expert online tutoring, trial sessions, or support. We’re available 24/7 for students and parents worldwide."
        />
        <meta
          name="twitter:image"
          content="https://yfcampus.com/Images/hero_image.webp"
        />
        <meta name="twitter:site" content="@YFC_Global" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yfcampus.com/contact-us" />

        {/* JSON-LD Structured Data for SEO */}
        <Script
          id="jsonld-contact-page"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Us - Your Future Campus",
              url: "https://yfcampus.com/contact-us",
              description:
                "Contact page for Your Future Campus (YFC), a global online tuition platform. Reach us for tutoring inquiries, support, or trial classes.",
              publisher: {
                "@type": "Organization",
                name: "Your Future Campus",
                url: "https://yfcampus.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://yfcampus.com/Images/yfc-logo.png",
                },
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+447532792318",
                contactType: "Customer Service",
                availableLanguage: ["English"],
                areaServed: "Worldwide",
              },
            }),
          }}
        />
      </head>

      <Banner breadcrumbData={breadcrumbData} />

      <div className="text-lg p-3 mx-auto max-w-4xl font-semibold py-3 text-left">
        Contact us for any questions or queries and fill out the form below to request a free trial. Our team is available 24/7 to support your learning journey and assist you in selecting the right course.
      </div>

      <div className="w-[90%] p-10 max-w-4xl mx-auto mt-3 rounded-[8px] px-6 md:px-9 lg:px-[56px] py-2 lg:py-12">
        <Register />
      </div>
    </>
  );
};

export default ContactUs;
