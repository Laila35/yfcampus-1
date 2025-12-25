 import { PrismicRichText } from "@prismicio/react";

const Cta = ({ slice }) => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 flex justify-center">
            <div className="bg-teal-600 text-white rounded-xl p-6 sm:p-8 lg:p-10 text-center max-w-2xl sm:max-w-3xl w-full relative overflow-hidden">
                
                {/* Content */}
                <div className="relative z-10 mb-4 sm:mb-6">
                    <div className="text-lg sm:text-xl lg:text-2xl font-semibold">
                        <PrismicRichText field={slice.primary.desc} />
                    </div>
                </div>
                
                <a
                    href={slice.primary.cta.url}
                    className="relative z-10 inline-block bg-white text-teal-600 font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-teal-50 transition-colors text-sm sm:text-base"
                >
                    {slice.primary.cta.text}
                </a>
            </div>
        </section>
    );
};

export default Cta;