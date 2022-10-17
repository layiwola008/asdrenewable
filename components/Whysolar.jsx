import React from "react";
import Image from "next/image";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

import { data } from "./data";

import SolarQuote from "../public/images/request-solar-quote.png";
import Link from "next/link";

const Whysolar = () => {
  return (
    <>
    <div className="whysolar__container">
      <div className="whysolar__title">
        <Slide bottom>
          <h2>
            <span>Why Must You</span> Go Solar?
          </h2>
        </Slide>
      </div>

      <div className="whysolar__article">
        {data.map((item) => (
          <Slide bottom key={item.id}>
            <article className="left">
              <span>
                <Image
                  src={item.image}
                  alt="Image"
                  width="90"
                  height="90"
                  objectFit="cover"
                  className="whysolar__icon"
                />
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          </Slide>
        ))}
      </div>

      <div className="whysolar__warranty__container">
        <div className="whysolar__waranty__image">
          <Image
            src={SolarQuote}
            alt="Image"
            width="250"
            height="250"
            objectFit="cover"
            className="whysolar__icon"
          />
        </div>

        <div className="whysolar__warranty">
          <article>
            <Bounce bottom>
              <h3>Enjoy Warranty Protection</h3>
            </Bounce>
            <Bounce bottom>
              <p>
                Because some solar products have lifetime warranties and require
                little or no maintenance so the installation gives you long
                years of trouble-free service.
              </p>
            </Bounce>
            <Link href="/asd-renewables/quote">
              <button>Go Solar Now</button>
            </Link>
          </article>
        </div>
      </div>
    </div>
    </>
  );
};

export default Whysolar;
