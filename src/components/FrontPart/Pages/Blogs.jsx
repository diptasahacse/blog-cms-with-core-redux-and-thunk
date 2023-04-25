import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../FrontPartComponents/Components/PageTitle";
import blogData from "../../../../public/blogs.json";
import BlogCard from "../FrontPartComponents/Components/BlogCard";
const Blogs = () => {
  console.log(blogData);
  console.log();
  return (
    <div className="overflow-hidden ">
      <PageTitle heading="Blogs" />
      <div className="bg-primary  py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-3 gap-4">
            {blogData.map((item, index) => (
              <BlogCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
