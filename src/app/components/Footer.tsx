"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {

  return (
    <footer className = "page-footer">
      <div className="grid grid-cols-2">
        <div className="pl-2 text-left">
          Created by <Link target="_blank" rel="noopener noreferrer" href="https://hideout.ink/me/" className="font-regular text-blue-600 underline dark:text-blue-500 hover:no-underline">luisquid</Link>
        </div>
        <div>
          <span className="pr-2 md:text-center">Copyright 2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;