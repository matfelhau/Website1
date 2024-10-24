import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();

  // Split the pathname into individual parts
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <ul className="flex space-x-2">
        <li>
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-700">{value}</span>
              ) : (
                <Link to={to} className="text-blue-500 hover:underline">
                  {value}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
