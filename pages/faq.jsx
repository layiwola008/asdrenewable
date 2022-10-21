import React, {useState} from "react";
import Image from "next/image";
import {AiFillPlusSquare, AiFillMinusSquare} from 'react-icons/ai';

import AsdServices from "../public/images/asd-rewables-services.jpg";

const faqContent = [
  {
    id: 1,
    question: "What are the benefits of solar energy?",
    answer: "Installing solar energy system on your property is a smart investment regardless of where you live. It makes you are free from erratic power supply, save money on your electricity bills and protect you against future increase in electricity rates."
  },
  {
    id: 2,
    question: "How do solar photovoltaic (PV) panels work?",
    answer: "We get alternating current (AC) from grid supply while the grid Solar panels absorb the sun's energy throughout the day and convert it into direct current (DC) electricity which converted to AC through an inverter that can be used to power your house."
  },
  {
    id: 3,
    question: "How much will solar panel maintenance cost?",
    answer: "Solar panel systems are made of durable tempered glass and require little to no maintenance for the 25 to 35 years that they will generate power. In most cases, you don’t even need to clean your solar panels regularly."
  },
  {
    id: 4,
    question: "What size solar energy system should I get?",
    answer: "The size of your solar energy system will depend on how much electrical equipment you intend to power within your house. Take advantage of our free assessment to determine the best system size for your needs."
  },
  {
    id: 5,
    question: "How long will my solar power system last?",
    answer: "In general, solar panels are very durable and capable of withstanding harsh environmental conditions. The various components of your solar power system will need to be replaced at different times, but your system should continue to generate electricity for up to 25 - 35 years."
  },
];


const faq = () => {
  const [faq, setFaq] = useState(-1);

  function toggleFaq(id) {
    if (id === faq) {
      setFaq(-1);
      return;
    } else {
      setFaq(id);
    }
    
  }

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
        <h1>Frequently Asked Questions</h1>
      </span>
      <div className="page__wrapper faq__main__comtainer">
        <div className="col services__header">
          <h2 className="faq__header__title">Let Us Answer Some Of Your Questions</h2>

          <div className="faq__container"> 
            {faqContent.map((item) => (
            <div className={faq === item.id ? "faq__item faq__item__active" : "faq__item"} key={item.id} onClick={() => toggleFaq(item.id)}>
            <div className={faq === item.id ? "faq__heading__active" : "faq__heading"}>
              <h3 className={faq === item.id ? "active__title" : "faq__title"}>{item.question}</h3>
              {faq === item.id ? (<><AiFillMinusSquare /></>) : (<><AiFillPlusSquare /></>)}
            </div>
            <div className="faq__body container">
              <p className={faq === item.id ? "active__content" : "inactive"}>{item.answer}</p>
            </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default faq;
