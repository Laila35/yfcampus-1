import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.PricingSectionSlice} PricingSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PricingSectionSlice>} PricingSectionProps
 * @type {import("react").FC<PricingSectionProps>}
 */
const PricingSection = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="flex justify-center items-center py-12 px-6"
        >
             
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-teal-800 to-teal-600 text-white py-8 px-6 rounded-3xl w-[90%] sm:w-[80%] max-w-3xl text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Pricing</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          {slice.primary.subheading}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link href={slice.primary.subject.url || "#"}>
           <Button
  variant="link"
  className="text-[#0f766e] bg-[#facc15] hover:bg-[#eab308] font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition"
>
            {slice.primary.subject.text} <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          </Link>
          <Link href={slice.primary.all_subjects.url || "#"}>
          <Button
            variant="link"
            className="bg-white text-teal-600 hover:bg-gray-100 font-semibold px-6 py-2 rounded-full shadow-sm transition"
          >
            {slice.primary.all_subjects.text} <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          </Link>
        </div>
      </div>
   
        </section>
    );
};

export default PricingSection;