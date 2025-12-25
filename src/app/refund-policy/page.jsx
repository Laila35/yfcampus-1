import Head from "next/head";

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy – Your Future Campus</title>
        <meta
          name="description"
          content="Understand our refund eligibility and how to request a refund for tuition fees at Your Future Campus."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Refund Policy – Your Future Campus" />
        <meta
          property="og:description"
          content="Understand our refund eligibility and how to request a refund for tuition fees at Your Future Campus."
        />
      </Head>

      <main className="min-h-screenpy-12 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 text-gray-800">
          <h1 className="text-4xl font-bold mb-6 text-center text-teal-700">
            Refund Policy
          </h1>

          <p className="mb-8 text-lg text-gray-700 text-center">
            At <span className="font-semibold text-teal-700">Your Future Campus</span>, we offer flexible and fair refund options for our online tuition services.
          </p>

          {/* Refund Eligibility */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-teal-600">🧾 Refund Eligibility</h2>
            <p className="mb-2 font-medium text-teal-700">✅ Refunds are available if:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>You cancel before the first paid class</li>
              <li>You have technical difficulties we cannot resolve</li>
              <li>A tutor is not assigned within 5 days of enrollment</li>
            </ul>

            <p className="mt-6 mb-2 font-medium text-red-600">⛔ No refunds will be issued if:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Classes have already been conducted</li>
              <li>You cancel without 24 hours' notice</li>
            </ul>
          </section>

          {/* Refund Process */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-teal-600">💳 Refund Process</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Refunds are processed back to your original payment method (credit/debit, PayPal, bank transfer)</li>
              <li>Processing time: 5–10 business days</li>
            </ul>
          </section>

          {/* Free Trial */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-teal-600">🎁 Free Trial</h2>
            <p className="text-gray-700">
              All users are entitled to one free trial class before starting any paid package.
            </p>
          </section>

          {/* Contact for Refund */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-teal-600">📧 For Refund Requests</h2>
            <p className="text-gray-700">
              Email us at{" "}
              <a
                href="mailto:admin@yfcampus.com"
                aria-label="Admin email"
                className="text-teal-600 font-semibold underline hover:text-teal-800"
              >
                admin@yfcampus.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
