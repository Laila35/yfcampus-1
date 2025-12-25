import Head from "next/head";

export default function DataDeletionPolicy() {
  return (
    <>
      <Head>
        <title>Data Deletion Policy – Your Future Campus</title>
        <meta
          name="description"
          content="Learn how to request the deletion of your personal data from Your Future Campus."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Data Deletion Policy – Your Future Campus" />
        <meta
          property="og:description"
          content="Learn how to request the deletion of your personal data from Your Future Campus."
        />
      </Head>

      <main className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 text-gray-800">
          <h1 className="text-4xl font-bold mb-6 text-center text-teal-700">
            Data Deletion Policy
          </h1>

          <p className="mb-8 text-lg text-gray-700 text-center">
            In accordance with GDPR and international privacy laws, you may request the deletion of your data from our system.
          </p>

          {/* Data We Can Delete */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-teal-600">🧾 Data We Can Delete</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Student name and contact information</li>
              <li>Student class reports and history</li>
              <li>Payment records (after tax compliance period)</li>
            </ul>
          </section>

          {/* Data That Cannot Be Deleted */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-teal-600">❗ What Cannot Be Deleted Immediately</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Legal compliance and invoicing data</li>
              <li>System logs for fraud prevention</li>
            </ul>
          </section>

          {/* How to Request Deletion */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-teal-600">📩 How to Request Deletion</h2>
            <p className="mb-4 text-gray-700">
              Send an email to{" "}
              <a
                href="mailto:admin@yfcampus.com"
                aria-label="Admin email"
                className="text-teal-600 font-semibold underline hover:text-teal-800"
              >
                admin@yfcampus.com
              </a>{" "}
              with the subject <strong>“Data Deletion Request”</strong> and include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Your Name</li>
              <li>Registered Email</li>
              <li>Reason for deletion</li>
            </ul>
            <p className="mt-6 text-gray-700">
              We will confirm within 7 business days after validating your identity.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
