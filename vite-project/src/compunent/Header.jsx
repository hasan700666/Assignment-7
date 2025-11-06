import React from "react";

const Header = () => {
  const li = (
    <>
      <li className="mx-3 ">Home</li>
      <li className="mx-3 ">FAQ</li>
      <li className="mx-3 ">Changelog</li>
      <li className="mx-3 ">Blog</li>
      <li className="mx-3 ">Download</li>
      <li className="mx-3 ">Contact</li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {li}
            </ul>
          </div>
          <a className="btn btn-ghost md:text-xl sm:text-lg text-xs font-bold">
            CS — Ticket System
          </a>
        </div>
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center">{li}</ul>
        </div>
        <div>
          <button className="btn bg-linear-to-r text-white from-[#632EE3] to-[#9F62F2] mx-5 ">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
