import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-black text-neutral-content p-10">
        <nav>
          <h1 className="text-2xl font-bold">CS — Ticket System</h1>
          <p>
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. Lorem <br /> Ipsum has been the industry's
            standard <br /> dummy text ever since the 1500s, when an <br />{" "}
            unknown printer took a galley of type and <br /> scrambled it to
            make a type specimen book.
          </p>
        </nav>

        <nav>
          <h6 className="text-lg font-bold">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="text-lg font-bold">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="text-lg font-bold">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="text-lg font-bold">Social Links</h6>
          <a className="link link-hover">@CS — Ticket System</a>
          <a className="link link-hover">@CS — Ticket System</a>
          <a className="link link-hover">@CS — Ticket System</a>
          <a className="link link-hover">support@cst.com</a>
        </nav>
      </footer>
      <div className="text-xs bg-black p-5 flex justify-center items-center">© 2025 CS — Ticket System. All rights reserved.</div>
    </div>
  );
};

export default Footer;
