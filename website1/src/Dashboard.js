import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 flex-1">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Total Users</h2>
          <p className="text-2xl">1,240</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Revenue</h2>
          <p className="text-2xl">$56,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Orders</h2>
          <p className="text-2xl">340</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Performance</h2>
          <p className="text-2xl">85%</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">#12345</td>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">$500</td>
              <td className="border px-4 py-2">Oct 23, 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">#12346</td>
              <td className="border px-4 py-2">Jane Doe</td>
              <td className="border px-4 py-2">$700</td>
              <td className="border px-4 py-2">Oct 22, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
