import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10  bg-[#1A1919] text-[#c4bfbf]">
      <div>
        <h1 className="text-white font-extrabold text-3xl">CareerHub</h1>
        <p>
          There are many variations of passages <br />
          of Lorem Ipsum , but the majority have <br />
          suffered alteration in some form.
        </p>
        <div className="text-3xl space-x-4 text-white">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div>
        <span className="footer-title text-white font-semibold text-[20px]">
          Company
        </span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title text-white font-semibold text-[20px]">
          Product
        </span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title text-white font-semibold text-[20px]">
          Support
        </span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
