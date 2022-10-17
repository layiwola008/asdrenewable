import Image from "next/image";
import React from "react";

import RemoteSensing from "../../public/images/remote-sensing.jpg";

const Rsgd = ({ tab }) => {
  return (
    <div
      className={`${
        tab === 4 ? "tab__content active__tab__content" : "tab__content"
      }`}
    >
      <div className="row">
        <div className="col__md">
          <h2 className="service__title">
            Remote Sensing Services and Geospatial Data
          </h2>
          <article className="service__article">
            Our strategic partnership with Maxar, RADARsat, Helecio and others
            has given us an edge to consistently deliver advanced geospatial
            information solutions for complex and demanding operations with High
            Resolution Optical Satellite Imagery, Satellite Borne, Airborne
            Radar for IFSAR and LIDAR data.
            <br />
            <br />
            The collected imagery can be efficiently processed to generate
            digital surface models, topography and imagery data products to
            integrate into both CAD and GIS systems for Oil and Gas, Land and
            Maritime Surveillance, National Mapping, Aeronautical Information
            and Precision Farming markets use.
          </article>
        </div>
        <div className="col__md">
          <Image
            src={RemoteSensing}
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

export default Rsgd;
