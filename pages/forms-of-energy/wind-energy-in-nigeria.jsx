import React from "react";
import Image from "next/image";
import Slide from "react-reveal/Slide";

import windEnergy from "../../public/images/wind-energy.jpg";
import Link from "next/link";

const WindEnergy = () => {
  return (
    <>
      <div className="page__wrapper">
        <div className="post__page__container">
          <div className="row">
            <div className="col__md">
              <Slide bottom>
                <h2>Wind Energy</h2>
              </Slide>
              <div className="post__image__container">
                <Slide bottom>
                  <Image
                    src={windEnergy}
                    alt="Image"
                    width="300"
                    height="300"
                    objectFit="cover"
                    className="image__style"
                  />
                </Slide>
              </div>
            </div>
            <div className="col__md">
              <Slide bottom>
                <p className="solutions__header__desc">
                  <strong>
                    <em>
                      One of the fastest-growing renewable energy technologies
                      is wind energy. Globally, wind energy installed capacity
                      increased from 74GW to 564GW in 2018 and it accounted for
                      16% of the energy generated by renewables.
                    </em>
                  </strong>
                  <br />
                  <br />
                  Electricity is generated by changing kinetic energy to
                  rotational energy which rotates a shaft connected to a
                  generator through electromagnetism.
                  <br />
                  <br />
                  The conversion from the air in motion to electrical energy is
                  done by a wind turbine, wind first hits a turbine’s blades,
                  causing them to rotate and turn the turbine connected to them.
                  The turbine's size coupled with its blades' length determines
                  the total power that can be garnered from the wind.
                  <br />
                  <br />
                  Nigeria's energy gap will be greatly reduced and electricity
                  access increased by taking advantage of the huge opportunity
                  and energy potential offered.
                </p>
              </Slide>

              <Link href="/forms-of-energy/biomass-in-nigeria"><button className="energy__post__button">Biomass Energy</button></Link>
              <Link href="/forms-of-energy/hydro-power-in-nigeria"><button className="energy__post__button">Hydro Power</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WindEnergy;
