import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const tutors = [
  {
    name: "Sarah Thompson",
    role: "English Tutor",
    degree: "BA (English Literature), University of London",
    experience: "10+ years’ teaching experience in British primary schools.",
    quote:
      "I love seeing students discover confidence in expressing themselves through writing and speaking.",
    img: "/Images/Icons/female.png",
  },
  {
    name: "Mohammed Khan",
    role: "Maths & Science Tutor",
    degree: "MSc (Physics), University of Manchester",
    experience:
      "Experienced A-Level and GCSE tutor with 7 years of results-driven online teaching.",
    quote: "Every student can master Maths — they just need the right guidance.",
    img: "/Images/Icons/male.png",
  },
  {
    name: "Aisha Patel",
    role: "Primary Tutor",
    degree: "B.Ed (Primary Education), University of Birmingham",
    experience: "Specialist in Early Learning and KS1 foundational skills.",
    quote:
      "I use interactive tools and fun activities to make learning exciting for children.",
    img: "/Images/Icons/female.png",
  },
  {
    name: "Daniel Roberts",
    role: "Computer Science Tutor",
    degree: "BSc (Computer Science), King’s College London",
    experience:
      "Coding mentor for KS3–A-Level students, focusing on Scratch & Python.",
    quote:
      "Coding is the language of the future — I help kids learn it with confidence and creativity.",
    img: "/Images/Icons/male.png",
  },
];

export default function MeetTutors() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      {/* Ambient background accents */}
       

      <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
 
          Meet Some of Our Tutors
    
      </h2>
      <p className="mb-12 text-center text-sm text-gray-600/90 md:text-base dark:text-gray-300/80">
        Experienced educators dedicated to helping every child achieve their best.
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2  ">
        {tutors.map((tutor) => (
          <Card
            key={tutor.name}
            className="group relative overflow-hidden rounded-2xl border border-teal-200/60 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-teal-500/40 focus-within:ring-2 focus-within:ring-teal-500/50 motion-reduce:transform-none motion-reduce:transition-none dark:border-teal-700/40 dark:bg-slate-900/60"
          >
            {/* Top Gradient Bar */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500" />

            {/* Subtle pattern on hover */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(13,148,136,0.08) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Header */}
            <CardHeader className="relative z-10 flex flex-col items-center pt-7 pb-3 text-center">
              {/* Avatar glow */}
              <div className="relative mb-3">
                <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-teal-400/60 via-cyan-300/60 to-teal-400/60 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-70" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white ring-2 ring-teal-400/80 ring-offset-4 ring-offset-white shadow-md dark:bg-slate-950 dark:ring-offset-slate-900">
                  <Image
                    src={tutor.img}
                    alt={tutor.name}
                    width={52}
                    height={52}
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {tutor.name}
              </h3>

              {/* Role pill */}
              <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-0.5 text-[11px] font-medium text-teal-700 ring-1 ring-inset ring-teal-200 dark:bg-teal-900/30 dark:text-teal-200 dark:ring-teal-800">
                <svg
                  viewBox="0 0 20 20"
                  className="h-3.5 w-3.5 fill-teal-500"
                  aria-hidden="true"
                >
                  <path d="M10 1.5l2.35 4.76 5.25.77-3.8 3.7.9 5.19L10 13.9l-4.7 2.94.9-5.19-3.8-3.7 5.25-.77L10 1.5z" />
                </svg>
                {tutor.role}
              </span>
            </CardHeader>

            {/* Content */}
            <CardContent className="relative z-10 space-y-3 px-6 pb-6 text-center">
              <p className="text-sm font-medium text-gray-800 md:text-base dark:text-gray-200">
                {tutor.degree}
              </p>

              <div className="mx-auto my-1 h-px w-16 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />

              <p className="text-sm text-gray-600 dark:text-gray-300/90">
                {tutor.experience}
              </p>

              <figure className="relative text-sm text-gray-500 dark:text-gray-400">
                <svg
                  viewBox="0 0 24 24"
                  className="absolute -left-3 -top-2 h-5 w-5 text-teal-300/70"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M7.17 11.6C6.45 8.9 7.73 6.7 10.1 5.1L9 3C5.2 5.2 3 8.6 3 12.2c0 3 1.8 5 4.2 5 2.1 0 3.8-1.7 3.8-3.9 0-2.2-1.6-4-3.83-4.7zM17.17 11.6c-.72-2.7.56-4.9 2.93-6.5L19 3c-3.8 2.2-6 5.6-6 9.2 0 3 1.8 5 4.2 5 2.1 0 3.8-1.7 3.8-3.9 0-2.2-1.6-4-3.83-4.7z"
                  />
                </svg>
                <blockquote className="italic leading-relaxed">
                  “{tutor.quote}”
                </blockquote>
              </figure>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}