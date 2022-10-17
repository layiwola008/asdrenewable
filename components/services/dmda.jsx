import Image from "next/image";
import React from "react";

import DigitalMapping from "../../public/images/digital-mapping.jpg";

const Dmda = ({ tab }) => {
  return (
    <div
      className={`${
        tab === 2 ? "tab__content active__tab__content" : "tab__content"
      }`}
    >
      <div className="row">
        <div className="col__md">
          <h2 className="service__title">
            Digital Mapping and Data Acquisition
          </h2>
          <article className="service__article">
            ASD provides comprehensive data acquisition in the most efficient
            manner for effective Inventories, maintenance procedures, quality
            control, documentation of state of construction planning and
            documentation of construction environmental impact studies no matter
            the what the acquisition purpose be it for a new GIS or update an
            existing GIS system.
            <br />
            <br />
            Our expertise covers a wide range of Asset Management Mapping
            including but not limited to Underground Utility Cable and Piping
            network, Streetlight, Road Furniture.
          </article>
        </div>
        <div className="col__md">
          <Image
            src={DigitalMapping}
            alt="Image"
            width="500"
            height="500"
            objectFit="cover"
            className="image__style"
          />
        </div>
      </div>
    </div>
  );
};

export default Dmda;
