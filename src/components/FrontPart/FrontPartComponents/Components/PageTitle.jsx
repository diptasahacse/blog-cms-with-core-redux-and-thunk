import React from "react";

const PageTitle = ({ heading }) => {
  return (
    <div className="bg-[url('/images/background.jpg')] bg-no-repeat bg-cover bg-right">
      <div className="bg-[#091945e0]">
        <div className="mx-auto max-w-7xl py-24 sm:py-28 px-6 lg:px-8 text-center">
          <h3 className="font-bold text-3xl lg:text-5xl ">
            {heading}
          </h3>
         
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
