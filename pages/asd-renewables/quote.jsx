import Image from "next/image";
import React from "react";
import Slide from "react-reveal/Slide";

import aboutImage from "../../public/images/about-asd.png";
import asdMan from "../../public/images/asd-man.jpg";

import { solutions } from "../../components/data";

const quote = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <>
      <span className="page__header">
        <Image
          src={aboutImage}
          alt="Image"
          width="1370"
          height="400"
          objectFit="cover"
        />
        <h1>Request A Quote</h1>
      </span>
      <div className="page__wrapper">
        <div className="col">
          <Slide bottom>
          <div className="quote__desc">
            <h2>Request a Quote</h2>
            <p>
              Please fill in the form below and we will respond in 48 hours with
              a quote(s) for your system.
            </p>
          </div>
          </Slide>
          <Slide bottom>
          <div className="quote__form__container">
            <div className="col">
              <form className="form" onSubmit={handleSubmit}>
                <div>
                  <span>
                    <label for="fname">First name:</label>
                    <br />
                    <input
                      type="text"
                      id="fname"
                      placeholder="Your Firstname"
                    />
                  </span>
                  <span>
                    <label for="lname">Last name:</label>
                    <br />
                    <input type="text" id="lname" placeholder="Your Lastname" />
                  </span>
                  <span>
                    <label for="email">Email:</label>
                    <br />
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter Email Address"
                    />
                  </span>
                  <span>
                    <label for="phone">Telephone Number:</label>
                    <br />
                    <input type="text" id="phone" placeholder="Mobile Number" />
                  </span>
                  <span>
                    <label for="solution">Choose A Solution:</label>
                    <br />
                    <select name="" id="solution">
                        <option value="">--Select Solution--</option>
                      <option value="">Residential/Home Energy</option>
                      <option value="">Commercial and Industrial Energy</option>
                      <option value="">Community Mini Grid</option>
                      <option value="">Farm Zone Energy – Solar pump, Lighting</option>
                      <option value="">Security: Solar-Powered Surveillance Camera</option>
                    </select>
                  </span>
                  <span>
                    <label for="comment">Comment:</label>
                    <br />
                    <textarea name="" id="comment" rows="5">
                    </textarea>
                  </span>
                </div>
                <input type="submit" value="Submit Quote" className="button" />
              </form>
            </div>
          </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default quote;
