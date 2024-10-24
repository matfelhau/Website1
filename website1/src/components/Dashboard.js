import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Dashboard = () => {
  // Data for the line chart
  const [lineChartData, setLineChartData] = useState({
    series: [{
      name: 'Revenue',
      data: [45000, 50000, 40000, 55000, 58000, 60000, 65000]
    }],
    options: {
      chart: {
        type: 'line',
        height: 350
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
      },
      title: {
        text: 'Monthly Revenue',
        align: 'left'
      },
      stroke: {
        curve: 'smooth'
      }
    }
  });

  // Data for the pie chart
  const [pieChartData, setPieChartData] = useState({
    series: [44, 55, 41, 17],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Product A', 'Product B', 'Product C', 'Product D'],
      title: {
        text: 'Product Sales',
        align: 'left'
      }
    }
  });

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

      {/* Line Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Monthly Revenue</h2>
        <ReactApexChart 
          options={lineChartData.options}
          series={lineChartData.series}
          type="line"
          height={350}
        />
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Product Sales Distribution</h2>
        <ReactApexChart 
          options={pieChartData.options}
          series={pieChartData.series}
          type="donut"
          height={350}
        />
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
            <tr>
              <td className="border px-4 py-2">#12347</td>
              <td className="border px-4 py-2">Michael Smith</td>
              <td className="border px-4 py-2">$1200</td>
              <td className="border px-4 py-2">Oct 20, 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">#12348</td>
              <td className="border px-4 py-2">Emily Johnson</td>
              <td className="border px-4 py-2">$450</td>
              <td className="border px-4 py-2">Oct 18, 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">#12349</td>
              <td className="border px-4 py-2">Chris Brown</td>
              <td className="border px-4 py-2">$890</td>
              <td className="border px-4 py-2">Oct 17, 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">#12350</td>
              <td className="border px-4 py-2">Sophia Davis</td>
              <td className="border px-4 py-2">$650</td>
              <td className="border px-4 py-2">Oct 16, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
