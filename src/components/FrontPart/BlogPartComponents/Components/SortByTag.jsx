import React from "react";

const SortByTag = () => {
  return (
    <div className="card w-full bg-secondary text-neutral-content">
      <div className="card-body  p-5">
        <h2 className="card-title">Tags</h2>
        <div>
          <div className="badge p-3 text-base m-1 text-white bg-[#48526e]">
            #JS
          </div>
          <div className="badge p-3 text-base m-1 text-white bg-[#48526e]">
            #Node JS
          </div>
          <div className="badge p-3 text-base m-1 text-white bg-[#48526e]">
            #Node JS
          </div>
          <div className="badge p-3 text-base m-1 text-white bg-[#48526e]">
            #Express
          </div>
          <div className="badge p-3 text-base m-1 text-white bg-[#48526e]">
            #NEXT
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortByTag;
