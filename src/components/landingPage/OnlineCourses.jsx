import Image from "next/image";
import Link from "next/link";
import React from "react";

const OnlineCourses = ({ courses }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 flex flex-wrap  p-3  gap-6 justify-center">
      {courses?.map((item) => {
        return (
          <div
            key={item?.id}
            className="relative group cursor-pointer  rounded-lg  overflow-hidden w-full sm:w-[30%] lg:w-[22%] bg-white shadow-md"
          >
            <Image
              src={item?.courseImage}
              alt={item?.title || item.name}  
              width={250}
              height={250}
              className="w-full h-auto transition-transform duration-1000 ease-in-out group-hover:scale-105"
            />
            {/* Darker Background  */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
            {/* Text Container */}
            <div className="absolute inset-x-3 bottom-4 text-center z-10 transition-transform duration-700 transform group-hover:translate-y-[-3rem]">
              <h3 className="text-xl text-white font-semibold mb-1">
                {item?.title}
              </h3>
              <p className="text-white text-sm">
                {item?.description}
              </p>
            </div>
            {/* Buttons (Visible on Hover) */}
            <div className="absolute inset-x-0 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex justify-center gap-2">
            <Link
            aria-label="More info"
  href={item?.link}
  className="px-4 py-2 font-semibold text-xs  bg-orange-600 text-white rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300"
>
  More Info
</Link>
<Link
aria-label="Get Register"
  href="/get-register"
  className="px-4 py-2 font-semibold text-xs bg-teal-600  text-white rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300"
>
  Register Now
</Link>





               
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OnlineCourses;
