"use client";

import { useState, useEffect } from "react";

const WixDisabledBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfigured, setIsConfigured] = useState(true);

  useEffect(() => {
    // Check if Wix client ID is configured
    const clientId = process.env.NEXT_PUBLIC_WIX_CLIENT_ID;
    const configured = !!(
      clientId &&
      clientId !== "your_wix_client_id_here" &&
      clientId.length > 10
    );
    setIsConfigured(configured);
    setIsVisible(!configured);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-50 bg-amber-50 border-l-4 border-amber-500 text-amber-800 p-4 rounded-lg shadow-xl max-w-md animate-pulse">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg
            className="h-6 w-6 text-amber-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-bold">⚙️ Configuration Required</p>
          <p className="text-xs mt-1">
            {!isConfigured ? (
              <>
                <strong>Wix environment variables are not configured.</strong>
                <br />
                Displaying demo data. To enable full functionality:
                <br />
                <span className="font-mono bg-amber-100 px-1 rounded text-xs">
                  1. Copy .env.example to .env.local
                </span>
                <br />
                <span className="font-mono bg-amber-100 px-1 rounded text-xs">
                  2. Add your NEXT_PUBLIC_WIX_CLIENT_ID
                </span>
                <br />
                <span className="font-mono bg-amber-100 px-1 rounded text-xs">
                  3. Restart the development server
                </span>
              </>
            ) : (
              "Demo mode active. Using sample data."
            )}
          </p>
          <a
            href="https://github.com/your-repo#setup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-amber-600 hover:text-amber-800 underline mt-2 inline-block"
          >
            📖 View Setup Guide
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-3 flex-shrink-0 text-amber-600 hover:text-amber-900 p-1 hover:bg-amber-100 rounded"
          title="Dismiss"
        >
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WixDisabledBanner;
