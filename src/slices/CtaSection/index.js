import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import{PrismicRichText} from"@prismicio/react"
/**
 * @typedef {import("@prismicio/client").Content.CtaSectionSlice} CtaSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CtaSectionSlice>} CtaSectionProps
 * @type {import("react").FC<CtaSectionProps>}
 */
const CtaSection = ({ slice }) => {
    const number=slice.primary.number;
    const email=slice.primary.email
    const cta=slice.primary.cta
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="relative py-0.5 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto my-12"
        >
            {/* Content Box */}
            <div className="relative bg-teal-600 text-white overflow-hidden rounded-3xl p-6    ">
                {/* Soft Radial Highlights */}
                <div className="absolute -top-16 -left-16 w-72 h-72 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] rounded-full blur-3xl opacity-30 -z-10" />
                <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] rounded-full blur-3xl opacity-20 -z-10" />

                <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
                    {/* Headings */}
                    <h2 className="text-2xl sm:text-3xl   font-extrabold">
                        {slice.primary.heading}
                    </h2>
                    <div className="text-base sm:text-lg md:text-xl font-medium">
                         <PrismicRichText field={slice.primary.subtitle} />
                    </div>
                    {/* CTA Button */}
                    <a
                        href={cta.url || "/uk/book-lesson"}
                        className="inline-flex items-center gap-2 px-6  py-2 bg-white text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-all duration-300"
                    >
                        {cta.text || "Book a Free Trial Lesson"}
                        <ArrowRight
                            size={20}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
