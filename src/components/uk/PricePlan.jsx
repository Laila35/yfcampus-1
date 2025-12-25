import { Button } from "../ui/button";

const PricePlan = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-2 group hover:border-teal-300 transition-all duration-300">
        {/* Left Content Section */}
        <div className="bg-gray-50 p-10 flex flex-col justify-center group-hover:bg-teal-50 transition-colors duration-300">
          <h2 className="text-3xl md:text-3xl font-semibold mb-4 group-hover:text-teal-800 transition-colors duration-300">
            Affordable Pricing Plans
          </h2>
          <p className="mb-2 text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
            Flexible monthly tuition options for 30-minute and 1-hour sessions.
          </p>
          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            No contracts. No hidden fees.
          </p>
        </div>
        {/* Right Actions Section */}
        <div className="p-10 flex flex-col md:flex-row items-center justify-center gap-5 group-hover:bg-white transition-colors duration-300">
          <a href="/uk/pricing" className="w-full">
            <Button className="w-full bg-teal-600 text-white py-3 rounded-xl hover:bg-teal-700 transition-all duration-300 group-hover:shadow-md">
              View Pricing
            </Button>
          </a>
          <a href="/uk/book-lesson" className="w-full">
            <Button className="w-full text-teal-700 py-3 rounded-xl border border-teal-200 bg-white hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 group-hover:shadow-sm">
              Book a Free Trial
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricePlan;