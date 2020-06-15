
import React from "react";

import "./ProcessDescription.scss";

export const ProcessDescription = () => (
    <div className="process-description">

        <div className="title-of-block">
            <object data="./images/welcome.svg" type="image/svg+xml" width="21" className="features-title-image">
                Your browser does not support svg
            </object>
            <p className="title-text title-of-block-text welcome-title-text">Process</p>
        </div>

        <p className="third-title process-description-title-text">By the same illusion which lifts the horizon.</p>
        <div className="process-description-text">
        <p className="process-description-text-item">
            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside,
        </p>
        <p className="process-description-text-item">
            the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
        </p>
        </div>

    </div>
);
