import React from 'react';

const YouTubeVideoSection = () => {
  return (
    <div className="sm:p-2 flex items-center justify-center mt-10">
      <div className="sm:border border-teal-600 flex flex-col md:flex-row justify-center items-center  px-6 py-8 w-full max-w-screen-xl bg-white  rounded-lg">
        
        {/* Left Section - Description */}
        <div className=" w-full md:w-1/2 px-6 mb-6 md:mb-0">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">About YFCampus</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            YFCampus is an online platform dedicated to providing high-quality STEM education and test preparation. Our courses are designed to help students excel in subjects like mathematics, science, and technology. Whether you're preparing for competitive exams or looking to enhance your understanding of STEM topics, YFCampus offers a comprehensive learning experience. This section dynamically adjusts its width based on the screen size, ensuring an optimal viewing experience.
          </p>
        </div>

        {/* Right Section - YouTube Video */}
        <div className="w-full md:w-1/2 px-6">
          <div className="relative pt-[56.25%]">
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/NkKvFvKfhkg" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideoSection;
