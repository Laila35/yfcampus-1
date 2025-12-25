import React from "react";

const HeroSection = (  ) => {
  const imageSrc="/Images/HeroSection/book.jpg";
  const title="Book a Free Trial Lesson – Start Learning Online with UK Tutors";
  const subtitle="Get matched with the best UK tutor for your child’s level and goals.Your first lesson is free — no commitment, no payment details required."
  const description="Start your child’s online learning journey today with a free trial lesson at Your Future Campus UK.We make it simple: just fill out the short form below, and our academic advisor will contact you to schedule your free one-to-one session.Before the trial, we conduct a quick pre-assessment to understand your child’s level and assign the most suitable tutor.Our friendly, qualified UK tutors will make your first class interactive, personalised, and goal-focused — helping your child gain confidence from day one."
  return (
    <section
      className="relative max-w-5xl mx-auto bg-cover bg-center sm:bg-top bg-no-repeat 
        py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24 
        rounded-3xl overflow-hidden"
      style={{ backgroundImage: `url(${imageSrc})` }}
      aria-label="Book a Free Trial Lesson – Start Learning Online with UK Tutors"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 sm:from-teal-900/80 via-teal-800/70 to-transparent"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative mx-auto text-center text-white space-y-6 z-10 max-w-3xl sm:max-w-4xl">
        {title && (
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-xl">
            {title.split("\n").map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>
        )}

        {subtitle && (
          <h3 className="text-base sm:text-lg md:text-lg font-semibold text-white/90 leading-relaxed drop-shadow-lg">
            {subtitle.split("\n").map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h3>
        )}

        {description && (
          <p className="text-sm sm:text-base md:text-lg text-gray-100/90 leading-relaxed drop-shadow-md">
            {description.split("\n").map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
