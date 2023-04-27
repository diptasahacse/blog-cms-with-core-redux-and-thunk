import React from "react";

const SortByUpload = () => {
  return (
    <div className="card w-full bg-secondary text-neutral-content">
      <div className="card-body  p-5">
        <h2 className="card-title">Short by</h2>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <input
              type="radio"
              name="radio-1"
              className="radio radio-warning radio-sm"
              checked
            />
            <label htmlFor="" className="">
              Last Upload
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="radio-1"
              id=""
              className="radio  radio-warning radio-sm"
            />
            <label htmlFor="" className="">
              First Upload
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortByUpload;
