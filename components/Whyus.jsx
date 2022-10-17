import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Slide from "react-reveal/Slide";

import Whyus from "../public/images/solar-engineer-asd.jpg";
import Leaf from "../public/images/solar-energy-icon-leaf.jpg";
import Link from "next/link";

const WhyUs = () => {
  return (
    <>
    <div className="whyus__container page__wrapper">
      <Slide bottom>
        <div className="whyus__header">
          <header>
            <p>Our Profile</p>
            <h1>
              We Are Focused on Innovation Advancements Driving Maintainable
              Development
            </h1>
          </header>
        </div>
      </Slide>
      <div className="whyus__content">
        <div className="whyus__row">
          <Slide bottom>
            <div className="whyus__stats">
              <div>
                <span>
                  <CountUp end={243} />
                </span>
                <p>Projects Completed In Last 5 Years</p>
              </div>
              <div>
                <span>
                  <CountUp end={1564} />
                </span>
                <p>Happy Customers Who Trusted Us</p>
              </div>
              <div>
                <span>
                  <CountUp end={13} />
                </span>
                <p>Awards: Milestones Awarded To Us</p>
              </div>
            </div>
          </Slide>
          <Slide bottom>
            <div
              className="whyus__img"
              style={{ borderRadius: "10px", overflow: "hidden" }}
            >
              <Image
                src={Whyus}
                alt="Image"
                width="430"
                height="430"
                objectFit="cover"
                className="whyus__image"
              />
            </div>
          </Slide>
          <Slide bottom>
            <div className="whyus__about">
              <span>
                <Image
                  src={Leaf}
                  alt="Image"
                  width="70"
                  height="70"
                  objectFit="cover"
                  className="whyus__about__icon"
                />
              </span>
              <p>
                <strong>
                  <em>
                    ASD emerged as a global energy solution and distribution
                    provider, tapping into the opportunity presented in
                    Nigeria's energy and power shortage to deliver sustainable
                    energy, storage and consumption, including energy
                    digitalization to power industrial, residential, farm and
                    remote areas of the country.
                  </em>
                </strong>
                <br />
                <br />
                We are committed to continuous technology innovations driving
                sustainable growth and adapting to market trends.
              </p>
              <Link href="/asd-renewables/about">
              <button>
                <span className="slider__btn__icon">
                  <BsArrowRightCircleFill />
                </span>
                Learn More
              </button>
              </Link>
            </div>
          </Slide>
        </div>
      </div>
    </div>
    </>
  );
};

export default WhyUs;
