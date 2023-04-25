import React from "react";

const BlogCard = ({ item }) => {
  const { title, shortDes, featureImage } = item;
  return (
    <div className="card card-compact bg-secondary shadow-xl">
      <figure>
        <img
          src={featureImage}
          alt="Shoes"
          className="h-[250px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{shortDes}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
