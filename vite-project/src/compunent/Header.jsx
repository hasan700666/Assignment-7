import React from "react";

const Header = () => {
  const li = (
    <>
      <li className="mx-5">Home</li>
      <li className="mx-3">FAQ</li>
      <li className="mx-3">Changelog</li>
      <li className="mx-3">Blog</li>
      <li className="mx-3">Download</li>
      <li className="mx-3">Contact</li>
      <button className="btn bg-linear-to-r text-white from-[#632EE3] to-[#9F62F2] mx-5">+ New Ticket</button>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold">CS — Ticket System</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex items-center">{li}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
