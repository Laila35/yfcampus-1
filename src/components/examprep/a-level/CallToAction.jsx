import { PrismicRichText } from "@prismicio/react";
const CalltoAction = ({ cta }) => {
    return (
        <section className="py-16 px-4 flex justify-center">
            <div className="bg-gradient-to-br from-teal-300 to-teal-600 border border-teal-100 rounded-2xl p-10 text-center shadow-sm max-w-3xl w-full">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                    {cta?.desc}
                </h2>

                <a
                    href="/book-trial"
                    className="inline-block bg-teal-600 text-white font-medium px-8 py-3 rounded-full shadow hover:bg-teal-700 transition"
                >
                    <PrismicRichText field={cta?.title} />
                </a>
            </div>
        </section>
    );
};

export default CalltoAction;
