const TestimonialCard = ({ text, author, image }) => {
    return (
      <div className="p-6 bg-white border rounded-lg">
        {/* Testimonial Text with Border */}
        <div className="border-2 border-teal-500 p-4 mb-4 rounded-lg">
          <p className="text-gray-700 italic">"{text}"</p>
        </div>
        {/* Author Info */}
        <div className="flex items-center  rounded-full p-2">
          <h4 className="font-semibold text-teal-700">{author}</h4>
        </div>
      </div>
    );
  };
  
  export default TestimonialCard;
  