import React from 'react';
import SpecialClasses from './SpecialClasses'; 
import Register from './ContactForm';

const MainSection = () => {
  return (
    <section>
      <div className="flex flex-col  p-2 mx-4 space-y-4 lg:flex-row xl:mx-32  2xl:mx-56 lg:space-y-0 lg:gap-4">
        {/* Left Side Content */}
        <div
          id="form"
          className="w-full lg:w-[80%] bg-white px-6 md:px-9 lg:px-[56px]  py-4 lg:py-12"
        >
          <SpecialClasses />
        </div>

        {/* Right Side Content */}
        <div className="w-full   lg:w-1/2  px-6 md:px-9 lg:px-[10px]   py-4 lg:py-12">
          <Register />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
