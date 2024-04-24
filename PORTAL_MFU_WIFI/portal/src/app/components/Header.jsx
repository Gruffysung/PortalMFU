import React from "react";
import Link from "next/image";
function Header() {
  return (
    <div>
      <div
        className="text-white p-2 flex  "
        id="header"
        style={{ overflow: "hidden" }}
      >
        <Link src="/mfu-logo.png" width={60} height={60} alt="MFU-LOGO"></Link>

        <div
          className="h-[3.5rem] w-[0.1rem] bg-yellow-500 ml-2"
          id="line"
        ></div>
        <div
          className="h-[0.1rem] w-[14rem] bg-blue-500 justify-center mt-8 ml-5"
          id="line"
        ></div>
      </div>
      <div className="h-2" id="line-under"></div>
    </div>
  );
}

export default Header;
