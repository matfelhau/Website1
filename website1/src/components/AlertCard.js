import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AlertCard = ({ alertType, alertTitle, alertDescription, alertCode, svgIcon }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(alertCode).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="mb-10 flex w-full">
      <div className={`flex w-1/2 border-l-8 ${alertType} bg-opacity-[15%] px-7 py-8 shadow-md`}>
        <div className="mr-5 flex h-9 w-9 items-center justify-center rounded-lg bg-opacity-30">
          {/* Render the provided SVG icon */}
          {svgIcon}
        </div>
        <div className="w-full">
          <h5 className="mb-3 text-lg font-bold">{alertTitle}</h5>
          <p className="leading-relaxed">{alertDescription}</p>
        </div>
      </div>

      {/* Code Section */}
      <div className="w-1/2 mb-10 rounded-sm border border-bg-gray-100 bg-code-color shadow-md">
        <div className="flex justify-between border-b border-b-gray-100 px-7 py-4">
          <h2 className="text-white font-normal text-lg">HTML/JSX Code</h2>
          <button
            onClick={copyToClipboard}
            className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded flex items-center space-x-2"
          >
            {isCopied ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8m-4 4h8M4 4v16m4-4H4m0-8h8m4-4h8"></path>
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <div className="flex-1 overflow-x-auto p-7 custom-scrollbar">
          <div style={{ width: 'max-content' }}>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {alertCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
