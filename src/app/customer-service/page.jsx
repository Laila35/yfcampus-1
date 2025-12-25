import Banner from "@/components/Banner";
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaQuestionCircle, FaClipboardList, FaHeadset, FaRegComments } from "react-icons/fa";

const CustomerService = () => {
  const breadcrumbData = {
    id: 1,
    name: "Customer Service | YFCampus Online Tutoring",
    link: "/",
  };

  return (
    <>
      <head>
        <title>Customer Service | YFCampus Online Tutoring</title>
        <meta
          name="description"
          content="Reach out to YFCampus customer service for online tutoring and assignment help. Contact us via email, phone, WhatsApp, or visit our Support page for more assistance."
        />
        <meta
          name="keywords"
          content="Customer Service, Online Tutoring, Assignment Help, Contact YFCampus, Student Support, YFCampus"
        />
      </head>

      <Banner breadcrumbData={breadcrumbData} />

      <div className="w-full md:w-4/5 lg:w-4/5 xl:w-full mx-auto px-3 mt-10 py-3">
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-5xl font-extrabold text-center text-teal-700 mb-6">
            Customer Service
          </h1>
          <p className="mt-8 text-lg text-center text-gray-700 leading-relaxed">
            Welcome to YFCampus’s Customer Service! We’re here to support your online learning and academic journey. Whether you’re looking for tutoring or assignment assistance, our team is ready to help with any questions or concerns.
          </p>

          <section className="mt-12">
            <h3 className="text-3xl font-bold text-teal-700 text-center flex items-center justify-center gap-2">
              <FaHeadset className="text-teal-500" /> Contact Us
            </h3>
            <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
              Reach us through any of the methods below. Our team is here to provide prompt support:
            </p>
            <ul className="mt-4 list-none text-gray-700 text-center space-y-4 mx-auto max-w-lg">
              <li>
                <FaEnvelope className="inline-block mr-2 text-teal-500" />
                Email: <a aria-label="Supporting Email" href="mailto:support@yfcampus.com" className="text-teal-600 hover:underline">support@yfcampus.com</a>
              </li>
              <li>
                <FaPhoneAlt className="inline-block mr-2 text-teal-500" />
                Phone/WhatsApp:
                <ul className="ml-6 list-none space-y-2 text-base">
                  <li><FaPhoneAlt className="inline-block mr-2 text-teal-500" /> US: +1 914-279-1693</li>
                  <li><FaPhoneAlt className="inline-block mr-2 text-teal-500" /> UK: +447532792318</li>
                  <li><FaPhoneAlt className="inline-block mr-2 text-teal-500" /> AUS: +61 480-050-048</li>
                </ul>
              </li>
              <li>
                <FaRegComments className="inline-block mr-2 text-teal-500" />
                Live Chat: Available on our website
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h3 className="text-3xl font-bold text-teal-700 text-center flex items-center justify-center gap-2">
              <FaClipboardList className="text-teal-500" /> Submit a Support Request
            </h3>
            <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
              Need further assistance? Fill out our support request form on the Help & Support page, and our team will get back to you promptly.
            </p>
          </section>

          <section className="mt-12">
            <h3 className="text-3xl font-bold text-teal-700 text-center flex items-center justify-center gap-2">
              <FaQuestionCircle className="text-teal-500" /> Frequently Asked Questions
            </h3>
            <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
              Here are answers to some common questions. For additional information, contact us or check our FAQs on the Help & Support page.
            </p>
          </section>

          <section className="mt-12">
            <h3 className="text-3xl font-bold text-teal-700 text-center">
              General FAQs
            </h3>
            <ul className="mt-4 list-disc text-gray-700 text-left space-y-3 mx-auto max-w-lg">
              <li>
                <span className="font-semibold text-teal-600">How can I sign up for tutoring?</span> Visit our Tutoring Services page to sign up for tutoring sessions. Choose your subject, select a time, and complete the sign-up process.
              </li>
              <li>
                <span className="font-semibold text-teal-600">What types of assignment help do you provide?</span> We offer assistance for various academic assignments. Visit our Assignment Help page for more details and submission instructions.
              </li>
              <li>
                <span className="font-semibold text-teal-600">How do I access my tutoring sessions?</span> You can access your sessions through the Student Portal. Your login details will be emailed to you upon registration.
              </li>
              <li>
                <span className="font-semibold text-teal-600">What payment methods do you accept?</span> We accept all major credit cards and online payment platforms. Visit our Payment Information page for detailed options.
              </li>
              <li>
                <span className="font-semibold text-teal-600">Can I reschedule a tutoring session?</span> Yes, you can reschedule through the Student Portal, or contact our support team for assistance.
              </li>
              <li>
                <span className="font-semibold text-teal-600">How do I get help with technical issues?</span> For technical support, use our live chat or email support@yfcampus.com.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default CustomerService;
