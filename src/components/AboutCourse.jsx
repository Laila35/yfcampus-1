import Image from "next/image";
import React from "react";
const AboutCourse = () => {
  return (
    <div className="flex flex-col md:flex-row mx-3 sm:mx-8 lg:mx-20 xl:mx-60 items-center mt-5 lg:mt-12">
      <div className="w-full lg:w-[60%]">
        <div className="text-left  text-black font-bold text-lg md:text-2xl lg:text-3xl">
          About Courses & Classes
        </div>
        <div className="text-left text-black font-normal text-base mt-2">
          The techniques, strategies, and processes we offer in tutoring these
          courses for Classes Online with help the students to
          learn, grow and be self-sufficient in future. So lets start with us  with.
          understand.      </div>
      </div>
      <div className="w-full lg:w-[40%] order-first md:order-last ">
        <Image
          src="/Images/Courses/AboutCourses.png"
          alt="about course"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default AboutCourse;
