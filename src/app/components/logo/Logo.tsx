"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
    <>
      {/* <div className = "transition ease-in-out duration-100 hover:animate-bounce"> */}
      <div className = "center-screen">
        <Link href="/about">
          <Image
            src="/4-ver2.png"
            alt="Logo"
            width={width < 1024 ? "128" : "300"}
            height={width < 1024 ? "128" : "300"}
            className="relative"
          />
        </Link>
      </div>
    </>
  );
};

export default Logo;