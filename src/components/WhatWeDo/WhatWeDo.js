import React from "react";

import "./WhatWeDo.scss";

export const WhatWeDo = () => (
  <div className="what-we-do-wrapper">
    <p className="second-title what-we-do-title">What we do</p>
    <div className="what-we-do-card-list">
      <div className="what-we-do-card-item">
        <div className="what-we-do-card-img-wrapper">
          <img src="./images/what-we-do-1.jpg" alt="flat" className="what-we-do-card-img" />
        </div>
        <p className="what-we-do-card-title">By the same illusion which lifts the horizon.</p>
        <p className="what-we-do-card-description">
          By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.
                </p>
      </div>

      <div className="what-we-do-card-item">
        <div className="what-we-do-card-img-wrapper">
          <img src="./images/what-we-do-2.jpg" alt="table" className="what-we-do-card-img" />
        </div>
        <p className="what-we-do-card-title">By the same illusion which lifts the horizon.</p>
        <p className="what-we-do-card-description">
          By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.
                </p>
      </div>

      <div className="what-we-do-card-item">
        <div className="what-we-do-card-img-wrapper">
          <img src="./images/what-we-do-3.jpg" alt="flat" className="what-we-do-card-img" />
        </div>
        <p className="what-we-do-card-title">By the same illusion which lifts the horizon.</p>
        <p className="what-we-do-card-description">
          By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.
                </p>
      </div>
    </div>
  </div>
);