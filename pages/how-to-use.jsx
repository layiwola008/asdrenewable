import Image from "next/image";
import React from "react";
import Slide from "react-reveal/Slide";

import { FaSolarPanel } from "react-icons/fa";
import { FaCarBattery } from "react-icons/fa";
import { ImPowerCord } from "react-icons/im";

import howToUseSystem from "../public/images/how-to-use-solar.jpg";

import SolarBattery from "../public/images/products/solar-battery.png";
import Link from "next/link";

const howToUse = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <span className="page__header steps__header">
        <Image
          src={howToUseSystem}
          alt="Image"
          width="1500"
          height="600"
          objectFit="cover"
        />
        <h1>How To Use Your System</h1>
      </span>
      <div className="page__wrapper">
        <div className="col steps__container">
          <h2>3 Ways To Keep Away From Blackouts</h2>
          <section className="steps">
            <div className="col">
              <Slide bottom>
                <div className="steps__row">
                  <div className="col__md step">
                    <h3>Step One</h3>
                    <p>Generate Energy using your own solar panels.</p>
                  </div>
                  <div className="col__md">
                    <FaSolarPanel className="step__icon" />
                  </div>
                </div>
              </Slide>

              <Slide bottom>
                <div className="steps__row__reverse">
                  <div className="col__md">
                    <FaCarBattery className="step__icon" />
                  </div>
                  <div className="col__md step">
                    <h3>Step Two</h3>
                    <p>Store energy generated with batteries.</p>
                  </div>
                </div>
                </Slide>

              <Slide bottom>
                <div className="steps__row">
                  <div className="col__md step">
                    <h3>Step Three</h3>
                    <p>
                      Avoid power outages by powering your homes and consuming
                      energy stored.
                    </p>
                  </div>
                  <div className="col__md">
                    <ImPowerCord className="step__icon" />
                  </div>
                </div>
              </Slide>
            </div>
          </section>
          <Link href="/asd-renewables/quote">
            <button>Go Solar Now!</button>
          </Link>
        </div>
      </div>
      <div className="steps__end"></div>
    </>
  );
};

export default howToUse;
