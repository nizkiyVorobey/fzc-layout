import React from "react";

import "./Testemonials.scss";

export const Testemonials = () => (
    <article className="testemonials limmiter-max">
        <div className="limiter testemonials-head">
            <div className="title-of-block">
                <object data="./images/welcome.svg" type="image/svg+xml" width="21" className="welcome-title-image">
                    Your browser does not support svg
                </object>
                <p className="title-text title-of-block-text testemonials-title-text">Testemonials</p>
            </div>

            <p className="third-title">
            By the same illusion which lifts the horizon.
            </p>
        </div>


        <div className="testemonials-card-list">
            <div className="testemonials-card">
                <div className="testemonials-card-image-wrapper">
                    <div className="testemonials-card-image-solid testemonials-card-image-solid-1"></div>
                    <img src="./images/testemonials-person-1.png" alt="" className="testemonials-card-image"/>
                </div>
                <p className="testemonials-card-text">
                    “By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.”
                </p>
                <div className="testemonials-card-line testemonials-card-line-1"></div>
                <p className="testemonials-card-name">John Wayne</p>
                <p className="testemonials-card-position">SEO</p>
            </div>

            <div className="testemonials-card">
                <div className="testemonials-card-image-wrapper">
                    <div className="testemonials-card-image-solid testemonials-card-image-solid-2"></div>
                    <img src="./images/testemonials-person-2.png" alt="" className="testemonials-card-image"/>
                </div>
                <p className="testemonials-card-text">
                    “By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.”
                </p>
                <div className="testemonials-card-line testemonials-card-line-2"></div>
                <p className="testemonials-card-name">John Wayne</p>
                <p className="testemonials-card-position">SEO</p>
            </div>

            <div className="testemonials-card">
                <div className="testemonials-card-image-wrapper">
                    <div className="testemonials-card-image-solid testemonials-card-image-solid-3"></div>
                    <img src="./images/testemonials-person-3.png" alt="" className="testemonials-card-image"/>
                </div>
                <p className="testemonials-card-text">
                    “By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.”
                </p>
                <div className="testemonials-card-line testemonials-card-line-3"></div>
                <p className="testemonials-card-name">John Wayne</p>
                <p className="testemonials-card-position">SEO</p>
            </div>
        </div>
    </article>
);
