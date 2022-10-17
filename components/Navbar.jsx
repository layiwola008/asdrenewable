import React from "react";
import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

import Logo from "../public/images/asd-logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__left">
        <Link href="/">
          <Image
            src={Logo}
            alt=""
            width="200"
            height="70"
            objectFit="cover"
            className="logo"
          />
        </Link>
      </div>
      <div className="navbar__middle">
        <ul>
          <Link href="/">
            <li className="active hide__mobile">Home</li>
          </Link>
          <Link href="/asd-renewables/about">
            <li className="hide__mobile">About Us</li>
          </Link>
          <Link href="/asd-renewables/about#solutions">
            <li>Solutions</li>
          </Link>
          <Link href="/asd-renewables/services"><li>Services</li></Link>
          
          <li>Products</li>
          <li>Partnership</li>
          <Link href="/asd-renewables/contact"><li className="hide__mobile">Contact Us</li></Link>
          
        </ul>
        <div className="navbar__phone">
          <span className="navbar__icon">
            <BsTelephoneFill />
          </span>
          <span className="phone__number">09084000487</span>
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__quote">
          <span className="quote__icon">
            <BsArrowRightCircleFill />
          </span>
          <Link href="/asd-renewables/quote">
            <p>Get A Quote</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
