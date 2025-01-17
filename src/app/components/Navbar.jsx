// src/app/components/Navbar.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import momentumLogoCroppedPng1 from "./image/logo.png";
import search from "./image/search.svg";
import "./style.css";

const Navbar = () => {
  return (
    <div className="frame">
      <div className="div">
        <Link href="/" className="image">
          {" "}
          <Image
            className="momentum-logo"
            alt="Momentum logo"
            src={momentumLogoCroppedPng1}
          />
        </Link>
        <div className="navbar">
          <div>
            <Link href="/about-us">About Us</Link>
          </div>
          <div>
            <Link href="/contact">Articles</Link>
          </div>
          <div>
            <Link href="/articles">Services</Link>
          </div>
          <div>
            <Link href="/articles">Careers</Link>
          </div>
          <div>
            <Link href="/articles">Contact Us</Link>
          </div>
          <div>
            <button className="button">
              <Image className="search" alt="Search" src={search} />

              <div className="text-wrapper-2">
                <Link href="/articles">Search articles</Link>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
