import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../FrontPartComponents/Components/PageTitle";
import blogData from "../../../../public/blogs.json";
import BlogCard from "../FrontPartComponents/Components/BlogCard";
import Sidebar from "../BlogPartComponents/Components/Sidebar";
const Blogs = () => {
 
  return (
    <div className="overflow-hidden ">
      <PageTitle heading="Blogs" />
      <div className="bg-primary px-3 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {blogData.map((item, index) => (
                  <BlogCard item={item} key={index} />
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 ">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
