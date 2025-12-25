import Link from 'next/link';

const CallToAction = ({ heading, description, buttonText }) => {
  return (
    <section className="bg-gradient-to-br mt-2 from-teal-400 to-teal-600 text-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-shadow-sm">
        {heading}
      </h2>
      <p className="text-lg md:text-xl text-center mb-8 text-shadow-sm">
        {description}
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-8">
        <Link aria-label='get register' href="/get-register" className="bg-white text-teal-500 font-semibold px-6 py-4 rounded-lg shadow-md hover:bg-teal-100 transition duration-300">
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;