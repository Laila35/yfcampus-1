const StatsSection = () => {
    return (
      <div className="max-w-xs sm:max-w-6xl mx-auto px-6 py-12 bg-teal-800  mt-10 rounded-3xl">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Enrolled Students */}
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50,000+</div>
            <div className="text-lg text-white">Enrolled Students</div>
          </div>
  
          {/* Tutors */}
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-lg text-white">Tutors</div>
          </div>
  
          {/* Years Experience */}
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10+</div>
            <div className="text-lg text-white">Years Experience</div>
          </div>
  
          {/* Completed Batches */}
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-lg text-white">Completed Batches</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default StatsSection;
  