import Image from "next/image";
import React from "react";
import Logo from "../public/images/asd-logo.png";
import { ImLocation2 } from "react-icons/im";
import { FaHeadphonesAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer__div">
      <div className="left">
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
        <span className="address">
          <span className="icon">
            <ImLocation2 />
          </span>
          <p>Address: 35 Oran Street, Wuse Zone 1, 900281, Abuja.</p>
        </span>
        <span className="phone">
          <span className="icon">
            <FaHeadphonesAlt />
          </span>
          <p>Phone: 09084000487</p>
          </span>
      </div>
      <div className="right">
        <span>
          <ul>
            <li>Residential Solution</li>
            <li>Industrial Solution</li>
            <li>Farm Zone Energy</li>
            <li>Security</li>
            <li>Community Mini Grid</li>
            <li>Renewables Products</li>
          </ul>
        </span>

        <span>
          <ul>
            <li>Renewable Energy Types</li>
            <li>How To Use</li>
            <li>Our Company</li>
            <li>Our Partners</li>
            <li>Contact Us</li>
          </ul>
        </span>

        <span>
          <ul>
            <li>FAQs</li>
            <li>Terms and Conditions</li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Footer;
