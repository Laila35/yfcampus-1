import { PrismicRichText } from "@prismicio/react";
import LandingRegister from "@/components/ContactForm";

const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10
                      lg:flex lg:items-start lg:gap-20">

        {/* FORM — LEFT ON DESKTOP */}
        <div className="w-full lg:w-3/5 mt-14 lg:mt-0
                        flex justify-center
                        order-2 lg:order-1">
          <div className="w-full max-w-xl rounded-2xl
                          border border-gray-300
                          bg-white p-8 shadow-xl">
            <LandingRegister />
          </div>
        </div>

        {/* TEXT — RIGHT ON DESKTOP */}
        <div className="w-full lg:w-2/5 text-center lg:text-left
                        order-1 lg:order-2">

          <h1 className="text-3xl font-semibold tracking-tight">
            {(() => {
              const title = slice.primary.title;
              const mid = Math.floor(title.length / 1.5);
              return (
                <>
                  <span className="text-gray-900">
                    {title.slice(0, mid)}
                  </span>
                  <span className="text-teal-600">
                    {title.slice(mid)}
                  </span>
                </>
              );
            })()}
          </h1>

          <div className="mt-6 text-lg leading-8 text-gray-600
                          space-y-4 max-w-xl mx-auto lg:mx-0">
            <PrismicRichText
              field={slice.primary.desc}
              components={{
                paragraph: ({ children }) => (
                  <p className="mb-4 last:mb-0">{children}</p>
                ),
              }}
            />
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href="/uk/book-lesson"
              className="rounded-2xl bg-gradient-to-r
                         from-[#006666] to-[#00332d]
                         px-8 py-3 text-base font-medium
                         text-white shadow-lg transition
                         hover:from-[#00332d] hover:to-[#006666]"
            >
              Start Free Trial
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;









