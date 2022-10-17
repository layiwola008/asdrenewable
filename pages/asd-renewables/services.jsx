import React, { useState } from "react";
import Image from "next/image";
import Slide from "react-reveal/Slide";

import Gis from "../../components/services/gis";
import Dmda from "../../components/services/dmda";
import Dcm from "../../components/dcm";

import aboutImage from "../../public/images/about-asd.png";
import asdMan from "../../public/images/asd-man.jpg";

import { solutions } from "../../components/data";
import Link from "next/link";

const services = () => {
  const [tab, setTab] = useState(1);

  const activateTab = (index) => {
    setTab(index);
    console.log(index);
  };

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
        <h1>Our Services</h1>
      </span>
      <div className="page__wrapper">
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
              Tab 4
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

        
        </div>
      </div>
    </>
  );
};

export default services;
