import React from "react";

const Dcm = ({ tab }) => {
  return (
    <div
      className={`${
        tab === 3 ? "tab__content active__tab__content" : "tab__content"
      }`}
    >
      <div className="row">
        <div className="col__md">
          <h2 className="service__title">Data Conversion and Migration</h2>
          <p>
            We delivered proven data conversion and quality control processes
            that ensure accurate and complete GIS data in the most
            cost-effective manner at all times to our clients. 
            <br />
            <br />
            We convert and migrate source data into any GIS Platform from: 
            <br />
            <br />
            <ul>
                <li>Hardcopy Maps</li>
                <li>GIS Data Format (ESRI Format / MapInfo Format)</li>
                <li>AutoCAD Drawings</li>
                <li>Field Records and Notes</li>
                <li>GPS Data</li>
            </ul>
             
              
          </p>
        </div>
        <div className="col__md"></div>
      </div>
    </div>
  );
};

export default Dcm;
