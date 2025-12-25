import { ExternalLink } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.ResourceExamBrdLinkSlice} ResourceExamBrdLinkSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResourceExamBrdLinkSlice>} ResourceExamBrdLinkProps
 * @type {import("react").FC<ResourceExamBrdLinkProps>}
 */
const ResourceExamBrdLink = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
              <section className="my-12 px-4">
                   <h2 className="text-3xl font-bold text-teal-700 mb-6 text-center">
                     Exam Board Links
                   </h2>
             
                   <div className="flex flex-col items-start gap-4 max-w-md mx-auto">
                     {slice.primary.boardlink.map((board, index) => (
                       <a
                         key={index}
                         href={board.cta.url}
                         className="flex items-center gap-2 px-4 py-3 w-full border border-teal-200 rounded-lg bg-teal-50 hover:bg-teal-100 hover:border-teal-300 transition-all duration-200 font-medium text-teal-700"
                       >
                         <ExternalLink className="w-5 h-5" />
                         {board.cta.text}
                       </a>
                     ))}
                   </div>
                 </section>
        </section>
    );
};

export default ResourceExamBrdLink;
