export default function CallToAction() {
  return (
    <section className="bg-teal-600 py-12 max-w-4xl mx-auto">
      <div className=" mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl font-semibold text-white">
          Start Your Child’s Maths Journey Today
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-md text-teal-100">
          One-to-one online maths tuition for KS1 → A-Level. Free trial available.
        </p>

        {/* CTA Button */}
        <a
          href="/book-trial"
          className="mt-8 inline-block bg-white text-teal-600 font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:bg-teal-50"
        > 
          Book a Free Trial     
        </a>
      </div>
    </section>
  );
}
