import React from "react";
import Slide from "react-reveal/Slide";

const Community = () => {
  return (
    <>
      <div className="commparent">
        <div className="community__container"></div>
        <div className="community__content">
          <article>
            <Slide bottom>
              <h3>
                <span>Community</span> Mini Grid Solution
              </h3>
            </Slide>
            <div className="content">
              <Slide left>
                <div className="left">
                  <h4>Off-Grid Power</h4>
                  <p>
                    We join forces with communities to create power to support
                    their localities.
                  </p>
                </div>
              </Slide>
              <Slide right>
                <div className="right">
                  <p>
                    Rural communities that are out of grid connections owing to
                    their geographical locations do not need to worry going
                    forward. We partner with communities to help design,
                    implement and generate local power to sustain their
                    community and ease their communal life with flexible payment
                    plans.
                  </p>
                </div>
              </Slide>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Community;
