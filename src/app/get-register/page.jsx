// Import necessary components
import Register from "@/components/landingPage/Register";
import SpecialClasses from "@/components/landingPage/SpecialClasses";
import React from "react";

// Define metadata directly (this part is specific to Next.js)
export const metadata = {
  title: 'Register for Free Trial Classes | Your Future Campus',
  description: 'Sign up for a free trial class at Youre Future Campus. Experience our high-quality education . Register now!',
};

const GetRegister = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row mt-10 gap-6 lg:gap-9 mx-4 xl:mx-32 2xl:mx-56">
        <div className="w-full lg:w-[40%] px-5 border rounded-[8px]">
          <SpecialClasses />
        </div>
        <div className="w-full lg:w-[60%] rounded-[8px] border px-6 md:px-9 lg:px-[56px] py-2 lg:py-12">
          <Register />
        </div>
      </div>
    </>
  );
};

export default GetRegister;
