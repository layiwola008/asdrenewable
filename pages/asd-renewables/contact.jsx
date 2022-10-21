import React from "react";
import Image from "next/image";

import AsdServices from "../../public/images/asd-rewables-services.jpg";


const contact = () => {

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
        <h1>Contact Us</h1>
      </span>
      <div className="page__wrapper">
        <div className="col services__header">
          <h2>Contact ASD Renewables</h2>
          <p>Let's Talk. Kindly use any of the following channels for support:</p>
          <p>info@asdrenewables.com</p>
          <p>09084000487</p>
        </div>
      </div>
    </>
  );
};

export default contact;
