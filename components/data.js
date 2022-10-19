//Image Icons
import SolarIcon from "../public/images/solar-icon.png";
import SolarIconHarmless from "../public/images/solar-icon-harmless.png";
import SolarIconCost from "../public/images/solar-icon-cost.png";

//React Icons
import {GiSolarPower} from 'react-icons/gi';
import {MdOutlineBusiness} from 'react-icons/md';
import {CgCommunity} from 'react-icons/cg';
import {GiCctvCamera} from 'react-icons/gi';
import {GiFarmTractor} from 'react-icons/gi';

//Slide Show Images
import HowToUseSolar from "../public/images/how-to-use-solar.jpg";
import HowSolarWorks from "../public/images/how-solar-works.jpg";
import Whysolar from "../public/images/why-go-solar.jpg";
import Slider01 from "../public/images/slider01.jpg";
import Slider02 from "../public/images/slider02.jpg";
import Slider03 from "../public/images/solar-partnership.jpg";
import RemoteSensing from "../public/images/gis-rs-services.jpg";

//Forms Of Energy
import bioMass from "../public/images/biomass-energy.jpg";
import hydroPower from "../public/images/hydro-power.jpg";
import windEnergy from "../public/images/wind-energy.jpg";

export const data = [
    {
        id: 1,
        image: SolarIcon,
        title: "Reliable Energy",
        desc: "Delivering your own power through sun-oriented innovation safeguards you from the unstable power."
    },
    {
        id: 2,
        image: SolarIconCost,
        title: "Rising Energy Cost",
        desc: "Sunlight-based energy furnishes you with free power saving you immense power costs on a month-to-month budget expense."
    },
    {
        id: 3,
        image: SolarIconHarmless,
        title: "Harmless Power",
        desc: "By adopting sun-based energy systems, you are making an eco-friendly home with zero emissions."
    },
]

export const slides = [
    {
      id: 1,
      image: Whysolar,
      header: "Why You Must Go Solar",
      paragraph:
        "Safeguard your home from the unstable power supply from the grid.",
      fBtnText: "Go Solar Now",
      fBtnLinK: "asd-renewables/quote",
      sBtnText: "View Products",
      sBtnLink: "/products",
    },
    {
      id: 2,
      image: HowSolarWorks,
      header: "Solar Energy Storage",
      paragraph:
        "Learn how the solar energy system works to generate, store and supply you power 24/7.",
      fBtnText: "Read More",
      fBtnLinK: "/how-solar-energy-works",
      sBtnText: "Get A Solution",
      sBtnLink: "/asd-renewables/about#solutions",
    },
    {
      id: 3,
      image: HowToUseSolar,
      header: "How You Can Use",
      paragraph:
        "3 Ways to keep away from blackouts, drive your home and consume energy from your own storage.",
      fBtnText: "Find Out Now",
      fBtnLinK: "#",
      sBtnText: "Buy Now",
      sBtnLink: "#",
    },
    {
      id: 4,
      image: RemoteSensing,
      header: "GIS and RS Services",
      paragraph:
        "ASD Renewables undertakes and executes GIS and RS Geospatial Projects for clients of any size.",
      fBtnText: "Explore Services",
      fBtnLinK: "/asd-renewables/services",
      sBtnText: "Contact Us",
      sBtnLink: "/asd-renewables/contact",
    },
    {
      id: 5,
      image: Slider01,
      header: "Global Solutions Provider",
      paragraph:
        "ASD leverages the opportunity presented in Nigeria's shortages to deliver sustainable energy.",
      fBtnText: "More About Us",
      fBtnLinK: "#",
      sBtnText: "Let's Partner",
      sBtnLink: "#",
    },
    {
      id: 6,
      image: Slider03,
      header: "Partnership",
      paragraph:
        "We work together with the best brands in solar equipment manufacturing around the world.",
      fBtnText: "Expore Now",
      fBtnLinK: "#",
      sBtnText: "More About Us",
      sBtnLink: "#",
    },
    {
      id: 7,
      image: Slider02,
      header: "Bridging Power Gaps",
      paragraph:
        "We harness hydro-power, wind energy, solar energy and biomass to fill Nigeria's energy gaps.",
      fBtnText: "More About Us",
      fBtnLinK: "#",
      sBtnText: "Explore Solutions",
      sBtnLink: "#",
    },
  ];

  export const energyForms = [
    {
      id: 1,
      image: hydroPower,
      header: "Hydro Power",
      shorDesc: "With an installed generation capacity of 16,384MW and the ability to generate about 12,522MW of lectricity from existing power plants, Nigeria is...",
      page: "/forms-of-energy/hydro-power-in-nigeria"
    },
    {
      id: 2,
      image: windEnergy,
      header: "Wind Energy",
      shorDesc: "One of the fastest growing renewable energy technologies is wind energy. Globally, wind energy installed capacity increased from 74GW to...",
      page: "/forms-of-energy/wind-energy-in-nigeria"
    },
    {
      id: 3,
      image: bioMass,
      header: "Biomass Energy",
      shorDesc: 'Biomass energy, or "bioenergy," is energy from plants and plant-derived materials. Emerging technologies exist that help transform food crops...',
      page: "/forms-of-energy/biomass-in-nigeria"
    }
  ];

  export const solutions = [
    {
      id: 1,
      icon: GiSolarPower,
      title: "Residential/Home Energy",
      desc: "Our home energy solution is fashioned to keep your home lights on through any power outage so that you can increase self-consumption, grip independence and reduce your electricity bill."
    },
    {
      id: 2,
      icon: MdOutlineBusiness,
      title: "Commercial and Industrial Energy",
      desc: "Businesses require constant energy to ensure continuity and high productivity. We have developed a flexible business model energy solution to make it easier for you to transition to solar energy systems without breaking your bank account."
    },
    {
      id: 3,
      icon: CgCommunity,
      title: "Community Mini Grid",
      desc: "Rural communities that are out of grip connections owing to their geographical locations do not need to worry going forward. We partner with communities to help design, implement and generate local power to sustain their community and ease their communal life with flexible payment plans."
    },
    {
      id: 4,
      icon: GiFarmTractor,
      title: "Farm Zone Energy – Solar pump, Lighting",
      desc: "In order to guarantee food security and sufficiency farms need constant power supply to run efficiently at an affordable rate. Our Farm zone energy solutions provide easy entry and flexible plans to allow farmers to make the best ROI in renewable energy."
    },
    {
      id: 5,
      icon: GiCctvCamera,
      title: "Security: Solar-Powered Surveillance Camera",
      desc: "For effective surveillance and monitoring, powering CCTV has become imperative in today’s crime-prone world. Security agencies and experts greatly depend on video recordings for effective monitoring and crime prevention. Our secure power guarantees proper and adequate power supply to camera installations regardless of their location. "
    },
  ]