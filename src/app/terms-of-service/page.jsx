import Head from "next/head";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service – Your Future Campus</title>
        <meta
          name="description"
          content="Review the terms and conditions for using our online tuition services at Your Future Campus."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Terms of Service – Your Future Campus" />
        <meta
          property="og:description"
          content="Review the terms and conditions for using our online tuition services at Your Future Campus."
        />
      </Head>

      <main className="min-h-screen  py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 text-gray-800">
          <h1 className="text-4xl font-bold mb-4 text-center text-teal-700">
            Terms of Service
          </h1>
          <p className="text-center text-sm text-gray-500 mb-8">
            Last Updated: 03-02-2025
          </p>

          <p className="mb-6 text-lg text-gray-700 text-center">
            By using <strong>yfcampus.com</strong> and its services, you agree to the following terms:
          </p>

          {/* Eligibility */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">🎓 1. Eligibility</h2>
            <p className="text-gray-700">
              You must be 18+ to register, or a parent/guardian must register on behalf of the student.
            </p>
          </section>

          {/* Services Offered */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">💻 2. Services Offered</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>One-on-One Online Tuition (via Zoom, Google Meet, or Teams)</li>
              <li>Homework Help, Exam Prep, Assignment Support</li>
            </ul>
          </section>

          {/* Communication */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">💬 3. Communication</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Students/parents must not share contact information with tutors.</li>
              <li>All communication should take place via:</li>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Official platform chats</li>
                <li>Admin-assigned WhatsApp numbers</li>
                <li>Official email addresses (e.g., admin@yfcampus.com)</li>
              </ul>
            </ul>
          </section>

          {/* Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">🔐 4. Security</h2>
            <p className="text-gray-700">
              Users are responsible for safeguarding their account login credentials.
            </p>
          </section>

          {/* Payments */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">💳 5. Payments</h2>
            <p className="text-gray-700">
              All payments must be made in advance as per agreed billing plans. Non-payment may result in account suspension.
            </p>
          </section>

          {/* Cancellations */}
          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">📬 6. Cancellations</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Trial classes are free.</li>
              <li>Rescheduling must be done 24 hours in advance.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
