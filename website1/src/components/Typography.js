import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Typography = () => {
  const typographyCode = `<p className="text-lg font-bold">This is bold text</p> \n\n<p className="text-sm italic">This is italic text</p> \n\n<p className="text-2xl text-blue-500">This is blue and large text</p>`;

  return (
    <div className="mx-auto max-w-screen-2xl p-6">
      {/* Breadcrumbs */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-semibold mb-6">Typography</h1>
        <Breadcrumbs />
      </div>

      {/* Main Layout - Two Columns */}
      <div className="flex gap-6">
        {/* Left: Typography Examples Section */}
        <div className="w-1/2">
          <div className="mb-10 rounded-sm border border-bg-gray-100 bg-white shadow-md">
            <h2 className="border-b border-b-gray-100 px-7 py-4 font-normal text-lg">Typography</h2>

            <div className="p-4 md:p-6 xl:p-9">
              {/* Typography Examples */}
              <div className="mb-7 space-y-4">
                <p className="text-lg font-bold">This is bold text</p>
                <p className="text-sm italic">This is italic text</p>
                <p className="text-2xl text-blue-500">This is blue and large text</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Code Snippet Section */}
        <div className="w-1/2 mb-10 rounded-sm border border-bg-gray-100 bg-code-color shadow-md">
          <div className="flex border-b border-b-gray-100 px-7 py-4 ">
            <svg className="w-7 h-7 text-gray-800 mr-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
            </svg>
            <h2 className="text-white font-normal text-lg">HTML/JSX Code</h2>
          </div>

          <div className="flex-1 overflow-x-auto p-7 custom-scrollbar">
            <div style={{ width: 'max-content' }}>
              <SyntaxHighlighter language="jsx" style={dracula}>
                {typographyCode}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
