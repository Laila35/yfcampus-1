"use client";

import { Disclosure } from "@headlessui/react";
import { PrismicRichText } from "@prismicio/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faqs({ faqs }) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Frequently Asked <span className="text-teal-500">Questions</span> 
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to the most common questions about our maths tuition.
          </p>
        </div>

        {/* FAQ List */}
        <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <Disclosure
              key={index}
              as="div"
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center text-left hover:text-teal-600 transition">
                    <span className="text-md font-medium">{faq.question}</span>
                    <ChevronUpIcon
                      className={`h-6 w-6 text-teal-600 transform transition-transform duration-200 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 text-gray-600 text-base space-y-2">
                    <PrismicRichText field={faq.answer} />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </section>
  );
}
