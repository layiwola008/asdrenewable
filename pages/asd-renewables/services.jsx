import React, { useEffect, useState } from "react";
import Image from "next/image";

import Gis from "../../components/services/Gis.jsx";
import Dmda from "../../components/services/Dmda.jsx";
import Dcm from "../../components/services/Dcm.jsx";
import Rsgd from "../../components/services/Rsgd.jsx";

import AsdServices from "../../public/images/asd-rewables-services.jpg";
import Link from "next/link";


const services = () => {
  const [tab, setTab] = useState(1);



  // useEffect(() => {
    
  // }, [index]);

  const activateTab = (index) => {
    setTab(index);
  };

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
        <h1>Our Services</h1>
      </span>
      <div className="page__wrapper">
        <div className="col services__header">
          <h2>Explore Our Services</h2>
          <p>At ASD, we are positioned to deliver the best of the following services in the most effective ways for our clients:</p>
        </div>
        {/*Div Tabs*/}
        <div className="box">
          <div className="tabs">
            <div
              onClick={() => activateTab(1)}
              className={`${tab === 1 ? "tab active-tab" : "tab"}`}
            >
              GIS & RS
            </div>

            <div
              onClick={() => activateTab(2)}
              className={`${tab === 2 ? "tab active-tab" : "tab"}`}
            >
              Digital Mapping
            </div>

            <div
              onClick={() => activateTab(3)}
              className={`${tab === 3 ? "tab active-tab" : "tab"}`}
            >
             Data Conversion 
            </div>

            <div
              onClick={() => activateTab(4)}
              className={`${tab === 4 ? "tab active-tab" : "tab"}`}
            >
              Remote Sensing
            </div>
          </div>
        </div>
      </div>

      {/*Tab Contents*/}
      <div className="full__container">
        <div className="tab__contents">
    
        <Gis tab={tab} />
        <Dmda tab={tab} />
        <Dcm tab={tab} />
        <Rsgd tab={tab} />

        <Link href="/asd-renewables/contact">
        <button>Contact Us</button>
        </Link>
        </div>
      </div>
    </>
  );
};

export default services;
