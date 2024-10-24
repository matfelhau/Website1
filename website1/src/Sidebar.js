import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-15 bg-custom-black h-screen flex flex-col">
      <nav className>
        <ul className="flex flex-col gap-3">
          {/* Dashboard Icon with Text Below */}
          <li className="relative group flex flex-col items-center">
            <a
              href="#"
              className="border-b border-custom-gray border-opacity-70 flex flex-col items-center justify-center rounded-sm px-4 py-4 text-white hover:bg-gray-800"
            >
              {/* Dashboard Icon */}
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
              {/* Text Below Icon */}
              <span className="text-xs font-thin text-white mt-2">Dashboard</span>
            </a>
          </li>

          {/* eCommerce Icon with Text Below */}
          <li className="relative group flex flex-col items-center">
            <a
              href="#"
              className="border-b border-custom-gray border-opacity-70 flex flex-col items-center justify-center rounded-sm px-4 py-4 text-white hover:bg-gray-800"
            >
              {/* eCommerce Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V9a4 4 0 1 0-8 0v2M5 11h14M9 16h6m-9 4h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z"
                />
              </svg>
              {/* Text Below Icon */}
              <span className="text-xs font-thin text-white mt-2">eCommerce</span>
            </a>
          </li>
          
          <li className="relative group flex flex-col items-center">
            <a
              href="#"
              className="border-b border-custom-gray border-opacity-70 flex flex-col items-center justify-center rounded-sm px-4 py-4 text-white hover:bg-gray-800"
            >
              {/* eCommerce Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V9a4 4 0 1 0-8 0v2M5 11h14M9 16h6m-9 4h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z"
                />
              </svg>
              {/* Text Below Icon */}
              <span className="text-xs font-thin text-white mt-2">Dummy</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
