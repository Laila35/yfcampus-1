import React from 'react'
export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:flex lg:items-center lg:justify-between sm:px-[3.6rem] sm:py-12">
        
        {/* Left content */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-2xl font-semibold tracking-tigh sm:text-4xl">
            One-to-One Maths Tutoring for <span className='text-teal-600'>UK Students</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Maths can feel challenging — but with the right tutor, it becomes clear, simple, 
            and enjoyable. At <span className="font-semibold">Your Future Campus</span>, we provide UK curriculum maths tuition 
            from Year 1 to A-Level, including GCSE Foundation, Higher, and SAT preparation. 
            Every lesson is one-to-one, interactive, and tailored to your child’s learning style.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="/free-trial"
              className="rounded-2xl bg-gradient-to-r from-[#006666] to-[#00332d] text-white  hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#00332d] hover:to-[#006666] px-6 py-2 shadow-lg transition"
            >
              Start Free Trial
            </a>  
          </div>
        </div>
        {/* Right image */}
        <div className="mt-12 lg:mt-0 lg:ml-10 flex justify-center">
          <img
            src="/images/hero_image.webp"
            alt="Maths tutoring session"
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

 
