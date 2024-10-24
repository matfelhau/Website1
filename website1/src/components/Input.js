import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';


const Input = () => {
  const buttonCode = `<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button> \n\n<button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg">Button</button>\n\n<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Button</button>\n\n<button className="border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-lg">Button</button>`;

  const [switcherToggle, setSwitcherToggle] = useState(false);
  const [switcherToggle2, setSwitcherToggle2] = useState(false);
  
  const handleToggleChange = () => {
    setSwitcherToggle(!switcherToggle); 
  }
  
  const handleToggleChange2 = () => {
    setSwitcherToggle2(!switcherToggle2); 
  }
  
  return (
    <div className="mx-auto max-w-screen-2xl p-6">
      {/* Breadcrumbs */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-semibold mb-6">Inputs</h1>
        <Breadcrumbs />
      </div>

      {/* Main Layout - Two Columns */}
      <div className="flex gap-6">
        {/* Left: Buttons Section */}
        <div className="w-1/2">
          <div className="mb-10 rounded-sm border border-bg-gray-100 bg-white shadow-md">
            <h2 className="border-b border-b-gray-100 px-7 py-4 font-normal text-lg">Input fields</h2>

            <div className="flex flex-col gap-5 p-6">
              <div>
                <label className="mb-3 block text-sm font-sans text-black">Default Input</label>
                <input type="text" placeholder="Default Input" className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#3b82f6] active:border-[#3b82f6] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></input>
              </div>
              
              <div>
                <label className="mb-3 block text-sm font-sans text-black">Active Input</label>
                <input type="text" placeholder="Active Input" className="w-full rounded-lg border-[1.5px] border-[#3b82f6] bg-transparent px-5 py-3 font-normal 
                text-black outline-none transition focus:border-[#3b82f6] active:border-[#3b82f6] disabled:cursor-default disabled:bg-white"></input>
              </div>
              
              <div>
                <label className="mb-3 block text-sm font-sans text-black">Disabled Input</label>
                <input type="text" placeholder="Disabled Input" disabled className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal
                 text-black outline-none transition focus:border-[#3b82f6] active:border-[#3b82f6] disabled:cursor-not-allowed disabled:bg-gray-100"></input>
              </div>
            </div>
          </div>
          
          <div className="mb-10 rounded-sm border border-bg-gray-100 bg-white shadow-md">
            <h2 className="border-b border-b-gray-100 px-7 py-4 font-normal text-lg">Toggle switch input</h2>

            <div className="flex flex-col gap-5 p-6">
            {/* Toggle Switch 1 */}
            <div>
                <label htmlFor="toggle1" className="flex cursor-pointer select-none items-center">
                <div className="relative">
                    <input type="checkbox" id="toggle1" className="sr-only" checked={switcherToggle} onChange={handleToggleChange} />
                    <div className={`block w-14 h-8 rounded-full ${switcherToggle ? 'bg-[#3C50E0]' : 'bg-[#E5E7EB]'}`}></div>
                    <div className={`absolute top-1 w-6 h-6 rounded-full bg-white transition ${switcherToggle ? 'translate-x-full bg-white' : 'left-1'}`}></div>
                </div>
                </label>
            </div>

            {/* Toggle Switch 2 */}
            <div>
                <label htmlFor="toggle2" className="flex cursor-pointer select-none items-center">
                <div className="relative">
                    <input type="checkbox" id="toggle2" className="sr-only" checked={switcherToggle2} onChange={handleToggleChange2} />
                    <div className={`block w-14 h-5 rounded-full shadow-inner ${switcherToggle2 ? 'bg-[#E5E7EB]' : 'bg-[#E5E7EB]'}`}></div>
                    <div className={`absolute -top-1 w-7 h-7 rounded-full !shadow-md bg-white transition ${switcherToggle2 ? 'translate-x-full bg-[#3C50E0]' : 'left-0'}`}></div>
                </div>
                </label>
            </div>

            {/* Toggle Switch 3 */}
            <div>
                <label htmlFor="toggle3" className="flex cursor-pointer select-none items-center">
                <div className="relative">
                    <input type="checkbox" id="toggle3" className="sr-only" />
                    <div className="block bg-meta-9 w-14 h-8 rounded-full dark:bg-[#5A616B]"></div>
                    <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition"></div>
                </div>
                </label>
            </div>
            </div>

          </div>
        </div>

        {/* Right: Code Snippet Section */}
        <div className="w-1/2 mb-10 rounded-sm border border-bg-gray-100 bg-code-color shadow-md flex flex-col flex-1 overflow-y-auto">
        <div className="border-b border-b-gray-100 px-7 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-7 h-10 text-gray-800 mr-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
            </svg>
            <h2 className="text-white font-normal text-lg text-center">Code</h2>
          </div>
          
          <div className="tabs">
          <button className="px-4 py-2 bg-gray-700 text-white">JSX</button>
          <button className="px-4 py-2 text-gray-500 hover:text-white">CSS</button>
          </div>
        </div>
        <div className="flex-1 overflow-x-auto p-7 custom-scrollbar">
          <div style={{ width: 'max-content' }}>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {buttonCode}
            </SyntaxHighlighter>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
