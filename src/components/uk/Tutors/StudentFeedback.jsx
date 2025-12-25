import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import React from "react";



const StudentFeedback = ({ feedbacks ,heading}) => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl   font-bold text-center text-gray-900 mb-12">
        {heading}
      </h2>

      <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
        {feedbacks.map((feedback, i) => (
          <div
            key={i}
            className="flex-1 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            <p className="text-gray-700 text-base md:text-lg">{feedback}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
       <Link href="/uk/reviews">
        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300">
          Read More Reviews
        </Button>
       </Link>
      </div>
    </section>
  );
};

export default StudentFeedback;
