import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    quote: "My son went from Grade 5 to Grade 8 in GCSE maths. Thank you!",
    author: "Parent, London",
  },
  {
    quote: "Clear explanations, patient tutors, and great exam prep.",
    author: "Parent, Manchester",
  },
  {
    quote: "Lessons are interactive and really tailored to my child's needs.",
    author: "Parent, Birmingham",
  },
];

export default function TestimonialsHighlight() {
  return (
    <section className="py-12 sm:py-12">
      <div className="max-w-7xl mx-auto sm:px-[3.6rem] px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
          What Parents <span className="text-teal-600">Say</span> 
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative bg-gray-50 p-8 rounded-3xl shadow overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {/* Decorative quote icons */}
              <FaQuoteLeft className="absolute top-4 left-4 text-teal-200 text-3xl opacity-40" />
              <FaQuoteRight className="absolute bottom-4 right-4 text-teal-200 text-3xl opacity-40" />

              {/* Quote */}
              <p className="text-gray-800 text-md italic mb-6">{t.quote}</p>

              {/* Author */}
              <p className="text-gray-900 font-bold text-right">- {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
