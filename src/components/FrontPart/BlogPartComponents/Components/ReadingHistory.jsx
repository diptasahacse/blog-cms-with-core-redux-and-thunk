import React from "react";
import blogData from "../../../../../public/blogs.json";
import { Link } from "react-router-dom";

const ReadingHistory = () => {
  console.log(blogData);
  return (
    <div className="card w-full bg-secondary text-neutral-content">
      <div className="card-body p-5">
        <h2 className="card-title">History</h2>
        <div>
          {blogData.slice(0, 3).map((item, index) => (
            <Link to="/" className="mb-6 inline-block" key={index}>
              <div className="flex gap-2">
                <img className="w-[80px]" src={item.featureImage} alt="" />
                <h5 className="font-bold">{item.title}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadingHistory;
