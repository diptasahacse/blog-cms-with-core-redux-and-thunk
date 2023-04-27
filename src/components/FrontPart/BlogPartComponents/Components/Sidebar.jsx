import React from "react";
import SortByUpload from "./SortByUpload";
import SortByTag from "./SortByTag";
import ReadingHistory from "./ReadingHistory";

const Sidebar = () => {
  return (
    <div className="">
      {/* Short by  */}
      <div className="mb-5">
        <SortByUpload />
      </div>
      {/* Tags */}
      <div className="mb-5">
        <SortByTag />
      </div>
      {/* History */}
      <div className="mb-5">
        <ReadingHistory />
      </div>
    </div>
  );
};

export default Sidebar;
