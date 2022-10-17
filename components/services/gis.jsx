import Image from "next/image";
import React from "react";

import GisImage from "../../public/images/gis.jpg";

const Gis = ({ tab }) => {
  return (
    <div
      className={`${
        tab === 1 ? "tab__content active__tab__content" : "tab__content"
      }`}
    >
      <div className="row">
        <div className="col__md">
          <h2 className="service__title">
            Geographical Information System (GIS) And Remote Sensing (RS)
            Services
          </h2>
          <article className="service__article">
            ASD Renewables undertakes and execute geospatial projects for
            clients of any size. We specialize in GIS and RS Geospatial
            Solutions.
            <br />
            <br />
            As part of our effort, we aimed at grasping new heights and keeping
            abreast with the latest technologies to provide reliable geospatial
            solutions with advanced hardware and software to the nation.
            <br />
            <br />
            We provide accurate surveying services of high resolution and medium
            resolution optical satellite imagery from Maxar Technologies,
            airborne radar (IfSAR) data and LiDAR with integration of valuable
            geospatial data.
          </article>
        </div>
        <div className="col__md">
          <Image
            src={GisImage}
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

export default Gis;
