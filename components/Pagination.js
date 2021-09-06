import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center">
      <div className="flex rounded-md mt-8">
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-white border border-indigo-200 text-indigo-700 border-r-0 ml-0 rounded-l hover:bg-indigo-500 hover:text-white"
        >
          <span>Previous</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-white border border-indigo-200 text-indigo-700 border-r-0 hover:bg-indigo-500 hover:text-white"
        >
          <span>1</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-white border border-indigo-200 text-indigo-700 border-r-0 hover:bg-indigo-500 hover:text-white"
        >
          <span>2</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-white border border-indigo-200 text-indigo-700 border-r-0 hover:bg-indigo-500 hover:text-white"
        >
          <span>3</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-white border border-indigo-200 text-indigo-700 rounded-r hover:bg-indigo-500 hover:text-white"
        >
          <span>Next</span>
        </a>
      </div>
    </div>
  );
};

export default Pagination;