import React from 'react'

const CTA = ({cta,link_text,url}) => {
  return (
    <section className="py-14 px-6 text-center bg-gradient-to-r from-teal-200 to-teal-300 rounded-3xl max-w-4xl mx-auto shadow-sm">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
          {cta}
        </h2>
        <a
          href={url}
          className="inline-block px-8 py-3 bg-teal-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-teal-700 transition-all duration-300"
        >
        {link_text}
        </a>
      </div>
    </section>
  )
}

export default CTA
