"use client";
import React, { Activity, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex flex-col  relative ">
      <div className="flex justify-between p-4  bg-linear-to-b from-black/5  to-transparent border-b border-gray-300">
        <p className="font-display uppercase font-normal tracking-wide text-xl text-textHeader">
          🍊 StoreKo
        </p>
        <button
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
        >
          {isMenuOpen ? (
             <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          
          ) : (
             <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      <Activity mode={isMenuOpen ? "visible" : "hidden"}>
        <div className="absolute w-full right-0 top-14 flex flex-col gap-4 bg-red-100 p-4">
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
        </div>
      </Activity>
    </header>
  );
};

export default Header;
