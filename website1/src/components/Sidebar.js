import React from 'react';
import { Link } from 'react-router-dom';
import SecondarySidebar from './SecondarySidebar';

const Sidebar = () => {
  return (
    <div className="flex">
    <aside className="w-15 bg-custom-black h-screen flex flex-col sticky top-0">
      <nav>
        <ul className="flex flex-col">
          <li className="border-b border-custom-gray border-opacity-70 relative group flex flex-col items-center">
            <Link
              to="/"
              className="flex flex-col items-center justify-center rounded-sm px-4 py-4 text-white hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>
              <span className="text-xs font-thin text-white mt-2">Dashboard</span>
            </Link>
          </li>

          <li className="border-b border-custom-gray border-opacity-70 relative group flex flex-col items-center">
            <Link
              to="/playground"
              className="flex flex-col items-center justify-center rounded-sm px-4 py-4 text-white hover:bg-gray-800"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                />
              </svg>
              <span className="text-xs font-thin text-white mt-2">Playground</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
    <SecondarySidebar />
    </div>
  );
};

export default Sidebar;
