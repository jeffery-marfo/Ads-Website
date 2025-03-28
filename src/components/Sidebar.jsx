import React from "react";
import K from "../constants";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 gap-y-6 bg-teal-300 h-screen px-2 py-4 fixed left-0 top-0  ">
      {/* <span>Logo Here</span> */}
      <div className="flex items-center">
        <h1 className="text-xl font-extrabold">
          <span className="text-black">Ad</span>
          <span className="text-white">Connector</span>
        </h1>
      </div>

      <div className=" flex flex-col gap-y-6">
        {
          // sidebar content
          K.NAVLINKS.map((link) => {
            return (
              <NavLink
                to={link.Path}
                // className="text-white hover:bg-white hover:text-black px-3 py-2 w-full rounded-md flex gap-x-2"
                className={({ isActive }) =>
                  `text-gray-700 hover:bg-white hover:text-black px-3 py-2 w-full rounded-md flex items-center gap-x-2
                 ${isActive ? "bg-white text-black font-bold shadow-md" : ""}`
                }
              >
                <link.icon />
                <span> {link.name}</span>
              </NavLink>
            );
          })
        }
      </div>
      <button className="mt-auto w-full px-4 py-2 flex items-center gap-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
