import React from "react";

import "./Welcome.scss";

export const Welcome = () => (
    <div className="limiter welcome">
        <div className="welcome-title title-of-block">
            <object data="./images/welcome.svg" type="image/svg+xml" width="21" className="welcome-title-image">
                Your browser does not support svg
            </object>
            <p className="title-text title-of-block-text welcome-title-text">Welcome</p>
        </div>
        <p className="welcome-description text">
            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
        </p>
    </div>
)