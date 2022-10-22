import React from "react";
import Image from "next/image";
import Slide from "react-reveal/Slide";

import {TiLocation} from 'react-icons/ti';
import {MdEmail, MdAccessTimeFilled} from 'react-icons/md';
import {BsFillPhoneFill, BsFillArrowRightCircleFill} from 'react-icons/bs';

import AsdServices from "../../public/images/asd-rewables-services.jpg";
import Link from "next/link";


const contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
}

  return (
    <>
      <span className="page__header">
        <Image
          src={AsdServices}
          alt="Image"
          width="1500"
          height="500"
          objectFit="cover"
        />
        <h1>Contact Us</h1>
      </span>
      <div className="page__wrapper">
        <div className="col">
        <Slide bottom>
          <div className="quote__desc">
            <h2>Request a Quote</h2>
            <p>
              Let's talk! Kindly use any of our channels for support.
            </p>
          </div>
          </Slide>
        </div>
        <div className="row">
          <Slide bottom>

          <div className="contact__col__left">           
            <div>
            <h3>Our Location</h3>
            <p><TiLocation /> {" "}35 Oran Street, Wuse Zone 1, 900281, Abuja.</p>
            </div>
            <div>
              <h3>Quick Contact</h3>
              <p><MdEmail /> {" "}contact@asdrenewables.com</p>
              <p><BsFillPhoneFill /> {" "}09084000487</p>
            </div>
            <div>
              <h3>Opening Hours</h3>
              <p>From Monday - Friday</p>
              <p><MdAccessTimeFilled /> {" "}8 am to 6 pm</p>
            </div>
            <Link href="/asd-renewables/quote"><button><BsFillArrowRightCircleFill className="contact__icon"/> {" "}Request A Quote</button></Link>
            
          </div>
          </Slide>

          <Slide bottom>
          <div className="contact__col__right">
              <div className="contact__form__container">
            <div className="col">
              <form className="contact__form" onSubmit={handleSubmit}>
                <div>
                  <span>
                    <label for="fname">First name</label>
                    <br />
                    <input
                      type="text"
                      id="fname"
                      placeholder="Your Firstname"
                    />
                  </span>
                  <span>
                    <label for="lname">Last name</label>
                    <br />
                    <input type="text" id="lname" placeholder="Your Lastname" />
                  </span>
                  <span>
                    <label for="email">Email</label>
                    <br />
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter Email Address"
                    />
                  </span>
                  <span>
                    <label for="phone">Telephone Number</label>
                    <br />
                    <input type="text" id="phone" placeholder="Mobile Number" />
                  </span>
                  <span>
                    <span>
                    <label for="email">Product Code/Description</label>
                    <br />
                    <input
                      type="text"
                      id="email"
                    />
                  </span>
                  </span>
                  <span>
                    <label for="comment">Message/Complaint</label>
                    <br />
                    <textarea name="" id="comment" rows="5">
                    </textarea>
                  </span>
                  <span>
                <button type="submit" className="contact__button"><BsFillArrowRightCircleFill className="contact__icon"/> {" "}Send Message</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
          </div>

          </Slide>
        </div>          
      </div>
    </>
  );
};

export default contact;
