import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-10 py-32 justify-center items-center ">
      <div className="flex flex-col gap-6 justify-center items-center text-center">
        <h1 className="text-3xl font-extrabold lg:text-6xl text-center">
          Personal Storefront for My Coding Resources
        </h1>
        <p className="text-balance lg:text-lg text-gray-500">
          A tailor-made platform where I sell source code, templates, and
          learning resources directly to you—free from third-party fees and
          restrictions.
        </p>
      </div>
     <button className="bg-primary px-8 py-2 rounded-md font-semibold">
      Browse Project
     </button>
    </div>
  );
};

export default Hero;
