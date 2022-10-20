import Image from "next/image";
import React from "react";

import Logo from "../public/images/asd-logo.png";
import { ImLocation2 } from "react-icons/im";
import { FaHeadphonesAlt } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer__div">
      <div className="left">
        <p>Quick Contact</p>
        <Link href="/">
          <span className="logo">
            <Image
              src={Logo}
              alt="ASD Renewables"
              width="200"
              height="70"
              objectFit="cover"
              className="logo"
            />
          </span>
        </Link>
        <span className="address">
          <span className="icon">
            <ImLocation2 />
          </span>
          <p>35 Oran Street, Wuse Zone 1, 900281, Abuja.</p>
        </span>
        <span className="phone">
          <span className="icon">
            <FaHeadphonesAlt />
          </span>
          <p>09084000487</p>
        </span>
      </div>
      <div className="right">
        <span>
          <p>Solutions</p>
          <ul>
            <li>Residential</li>
            <li>Industrial</li>
            <li>Security</li>
            <li>Farm Zone Energy</li>
            <li>Community Mini Grid</li>
            <Link href="/how-solar-energy-works">
              <li>How It Works</li>
            </Link>
            <Link href="/how-to-use">
              <li>How To Use</li>
            </Link>
          </ul>
        </span>

        <span>
          <p>Company</p>
          <ul>
            <Link href="/asd-renewables/about">
              <li>About Us</li>
            </Link>

            <Link href="/asd-renewables/services">
              <li>Services</li>
            </Link>
            <Link href="/products">
              <li>Products</li>
            </Link>
            <li>Our Partners</li>
          </ul>
        </span>

        <span>
          <p>Support</p>
          <ul>
            <Link href="/faq">
              <li>FAQs</li>
            </Link>

            <Link href="/asd-renewables/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Footer;
