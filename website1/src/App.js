import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './Navbar';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
