import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SecondarySidebar = () => {
  const location = useLocation(); // Get the current path for active link styling

  return (
    <aside className="w-64 bg-white shadow-lg py-6 px-4 h-screen border-r border-gray-200">
      <nav className="space-y-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Navigate</h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/playground/buttons"
              className={`block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition-colors duration-200 ${
                location.pathname === '/playground/buttons' ? 'bg-blue-50 text-blue-600 font-semibold' : ''
              }`}
            >
              Buttons
            </Link>
          </li>
          <li>
            <Link
              to="/playground/typography"
              className={`block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition-colors duration-200 ${
                location.pathname === '/playground/typography' ? 'bg-blue-50 text-blue-600 font-semibold' : ''
              }`}
            >
              Typography
            </Link>
          </li>
          <li>
            <Link
              to="/playground/alerts"
              className={`block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition-colors duration-200 ${
                location.pathname === '/playground/alerts' ? 'bg-blue-50 text-blue-600 font-semibold' : ''
              }`}
            >
              Alerts
            </Link>
          </li>
          <li>
            <Link
              to="/playground/inputs"
              className={`block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition-colors duration-200 ${
                location.pathname === '/playground/inputs' ? 'bg-blue-50 text-blue-600 font-semibold' : ''
              }`}
            >
              Inputs
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SecondarySidebar;
