import React from "react";

import "./AboutUs.scss";
import { Blob } from "../Blob/Blob";

export const AboutUs = () => (
    <article className="limiter about-us">
        <div className="about-us-overlay">
            <Blob/>
        </div>
        
        <div className="about-us-content">
            <p className="second-title about-us-title">Vision, Passion, Results</p>
            <p className="text about-us-text">
                By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath.
            </p>
            <div className="btn about-us-btn">
                <a href="#" className="btn-link about-us-btn-link">Apply</a>
            </div>
        </div>
    </article>
);
