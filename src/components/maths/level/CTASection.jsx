import Link from "next/link";

export default function CTASection({ cta }) {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
          {cta}
        </h2>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {/* Primary CTA */}
          <Link
            href="/get-started"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#006666] to-[#00332d] 
                       text-white font-medium shadow-md hover:shadow-2xl 
                       transition duration-300 hover:from-[#00332d] hover:to-[#006666]"
          >
            Get started
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/learn-more"
            className="px-6 py-3 text-gray-700 font-medium hover:text-[#006666] transition 
                       flex items-center justify-center gap-2"
          >
            Learn more <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
