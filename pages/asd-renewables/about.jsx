import React from "react";
import Image from "next/image";
import Slide from "react-reveal/Slide";

import aboutImage from "../../public/images/about-asd.png";
import asdMan from "../../public/images/asd-man.jpg";

import { solutions } from "../../components/data";
import Link from "next/link";

const About = () => {
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
        <h1>About ASD Renewables</h1>
      </span>
      <div className="page__wrapper">
        <div className="row">
          <div className="col__md">
            <div>
              <Slide bottom>
                <Image
                  src={asdMan}
                  alt="Image"
                  width="540"
                  height="830"
                  objectFit="cover"
                  className="image__style"
                />
              </Slide>
            </div>
          </div>
          <div className="col__md">
            <Slide bottom>
              <h2>Company Profile</h2>
            </Slide>
            <Slide bottom>
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
                We aggregate different renewable technologies such as
                hydropower, wind energy, solar energy and biomass using abundant
                natural resources within our geographical space as a form of the
                energy mix to create electricity on a commercial scale so as to
                reduce Nigeria's energy gap amid increasing energy growth and
                demand.
                <br />
                <br />
                We source best-designed and manufactured renewable energy
                products such as solar panels, PV inverters, and energy backup
                products creating smart energy management systems for homes,
                commercial and industrial end users including the design and
                setup of mini-grid for communities in rural environments. We
                also undertake the development of viable clean energy solutions
                with different technologies including biomass, hydropower and
                wind turbines.
                <br />
                <br />
                We are committed to continuous technology innovations driving
                sustainable growth and adapting to market trends to provide
                customized products to our esteemed clients in different parts
                of the globe.
                <br />
                <br />
                With a combined team of experienced installers, we offer an
                unrivalled service to our happy customers, supported with
                outstanding warranties on our energy solutions and products,
                giving the most ROI with ASD.
              </p>
            </Slide>
          </div>
        </div>
        <div className="about__solutions" id="solutions">
          <div className="row">
            <div className="col__md">
              <Slide bottom>
                <h2>Our Array Of Solutions</h2>
              </Slide>
            </div>
            <div className="col__md">
              <Slide bottom>
                <p className="solutions__header__desc">
                  At ASD, our team is positioned to deliver the best and most
                  intelligent sustainable energy ecosystem in the most
                  innovative and efficient ways for our customers so they can
                  benefit from sustainable energy.
                </p>
              </Slide>
            </div>
          </div>
          <div className="row__wrap">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Slide bottom>
                  <div className="solution" key={solution.id}>
                    <hr />
                    <span>
                      <Icon />
                    </span>
                    <div className="desc">
                      <h3>{solution.title}</h3>
                      <p>{solution.desc}</p>
                      <Link href="/asd-renewables/quote">
                        <button>Request A Quote</button>
                      </Link>
                    </div>
                  </div>
                </Slide>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;