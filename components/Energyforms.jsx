import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Bounce from "react-reveal/Bounce";

import Whyus from "../public/images/solar-engineer-asd.jpg";

import { energyForms } from "./data";

const Energyforms = () => {
  return (
    <div className="energy__forms__container">
      <div className="header">
        <div className="left">
          <Bounce bottom>
            <h2>Major Forms of Renewable Energy</h2>
          </Bounce>
        </div>
        <div className="right">
          <Bounce bottom>
            <p>
              At ASD, our group is situated to convey the best and shrewd
              sustainable energy ecosystem in the most creative and productive
              ways for our clients so they can benefit from sustainable energy.
            </p>
          </Bounce>
          <Bounce bottom>
            <button>Explore Our Solutions</button>
          </Bounce>
        </div>
      </div>

      <div className="cards">
        {energyForms.map((item) => (
          <div className="card" key={item.id}>
            <Bounce bottom>
            <span>
              <Link href={item.page}>
                <Image
                  src={item.image}
                  alt="Image"
                  width="350"
                  height="200"
                  objectFit="cover"
                />
              </Link>
            </span>
            </Bounce>
            <div className="details">
              <Bounce bottom>
              <Link href={item.page}>
                <h3>{item.header}</h3>
              </Link>
              </Bounce>
              <Bounce bottom>
              <p>{item.shorDesc}</p>
              </Bounce>
              <Link href={item.page}>
                <button>
                  <span className="read_more_icon">
                    <BsArrowRightCircleFill />
                  </span>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Energyforms;
