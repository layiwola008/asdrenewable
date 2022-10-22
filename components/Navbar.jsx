import React, {useState} from "react";
import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import {AiOutlineMenu} from 'react-icons/ai';

import Logo from "../public/images/asd-logo.png";
import Link from "next/link";

const Navbar = () => {
  const [page, setPage] = useState(1);

  function setCurrentPage(index) {
    setPage(index);
  }

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
            onClick={() => setCurrentPage(1)}
          />
        </Link>
      </div>
      <div className="navbar__middle">
        <ul>
          <Link href="/">
            <li className={page === 1 ? "active__page hide__mobile" : "hide__mobile"} onClick={() => setCurrentPage(1)}>Home</li>
          </Link>
          <Link href="/asd-renewables/about">
            <li className={page === 2 ? "active__page hide__mobile" : "hide__mobile"} onClick={() => setCurrentPage(2)}>About Us</li>
          </Link>
          <Link href="/asd-renewables/about#solutions">
            <li className={page === 3 ? "active__page hide__mobile" : "hide__mobile"} onClick={() => setCurrentPage(3)}>Solutions</li>
          </Link>
          <Link href="/asd-renewables/services">
            <li className={page === 4 ? "active__page hide__mobile" : "hide__mobile"} onClick={() => setCurrentPage(4)}>Services</li>
          </Link>
          <Link href="/products">
            <li className={page === 5 ? "active__page hide__mobile" : "hide__mobile"} onClick={() => setCurrentPage(5)}>Products</li>
          </Link>
          <Link href="/asd-renewables/contact">
            <li className={page === 6 ? "active__page hide__mobile" : "hide__mobile"} onClick={() => setCurrentPage(6)}>Contact Us</li>
          </Link>
        </ul>
        <div className="navbar__phone">
          <span className="navbar__icon hide__mobile">
            <BsTelephoneFill />
          </span>
          <span className="phone__number hide__mobile">09084000487</span>
        </div>
      </div>


      <div className="navbar__right">
        {/* <div className="hamburger">
          <AiOutlineMenu className="hamburger__icon"/>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Solutions</li>
            <li>Services</li>
            <li>Products</li>
            <li>Contact Us</li>
          </ul>
        </div> */}


        {/* <div className="navbar__quote">
          <span className="quote__icon">
            <BsArrowRightCircleFill />
          </span>
          <Link href="/asd-renewables/quote">
            <p>Get A Quote</p>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
