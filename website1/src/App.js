import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Playground from './components/Playground';
import Typography from './components/Typography';
import Buttons from './components/Buttons';
import Alert from './components/Alert';
import Input from './components/Input';

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar is common across both routes */}
        <Sidebar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/playground/buttons" element={<Buttons />} />
            <Route path="/playground/typography" element={<Typography />} />
            <Route path="/playground/alerts" element={<Alert />} />
            <Route path="/playground/inputs" element={<Input />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
