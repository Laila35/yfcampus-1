import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy – Your Future Campus</title>
        <meta
          name="description"
          content="Learn how Your Future Campus collects, uses, and protects your personal information during online tuition services."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Privacy Policy – Your Future Campus" />
        <meta
          property="og:description"
          content="Learn how Your Future Campus collects, uses, and protects your personal information during online tuition services."
        />
      </Head>

      <main className="min-h-screen  py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 text-gray-800">
          <h1 className="text-4xl font-bold mb-4 text-center text-teal-700">
            Privacy Policy
          </h1>
          <p className="text-center text-sm text-gray-500 mb-8">
            Effective Date: 04-01-2025
          </p>

          <p className="mb-6 text-lg text-gray-700 text-center">
            Your Future Campus (“we,” “us,” or “our”) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and safeguard your information when you
            visit <strong>yfcampus.com</strong> or use our services.
          </p>

          {/* Info Collected */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">📌 What Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Student/Parent Name, Email, Phone Number (via lead forms)</li>
              <li>Student Grade & Subjects of Interest</li>
              <li>IP Address, browser data (for analytics & security)</li>
              <li>Payment and billing details (secure and encrypted)</li>
            </ul>
          </section>

          {/* Usage */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">🔐 How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>To schedule and conduct 1-on-1 online classes</li>
              <li>For student assessments, course recommendations, and academic reports</li>
              <li>For secure payment processing and invoicing</li>
              <li>For authorized communication (WhatsApp, Email)</li>
            </ul>
          </section>

          {/* Contact Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">🚫 Contact Sharing Policy</h2>
            <p className="text-gray-700">
              Tutors are strictly prohibited from asking or receiving any student/parent contact
              information. Only authorized managers/admins may share or manage communication via
              official company WhatsApp/email channels.
            </p>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">🔄 Data Sharing & Security</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>We do not sell or rent your data to third parties.</li>
              <li>Data is stored securely using encryption and industry-standard protection.</li>
            </ul>
          </section>

          {/* Rights */}
          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">🔒 Your Rights</h2>
            <p className="mb-2 text-gray-700">You may request:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>A copy of your personal data</li>
              <li>Deletion of your data (see Data Deletion Policy)</li>
              <li>Restriction of data processing</li>
            </ul>
            <p className="mt-4 text-gray-700">
              For requests: 📧{" "}
              <a aria-label="Admin Email" href="mailto:admin@yfcampus.com" className="text-teal-600 underline">
                admin@yfcampus.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
