import React from "react";

import "./Feautres.scss";

export const Feautres = () => (
    <article className="features">
        <article className="features-content limmiter-max">
            <div className="limiter features-description">
                <div className="title-of-block">
                    <object data="./images/title-square-white.svg" type="image/svg+xml" width="21" className="welcome-title-image">
                        Your browser does not support svg
                    </object>
                    <p className="title-text title-of-block-text features-title-text">Features</p>
                </div>
                <p className="third-title features-text-title">By the same illusion which lifts the horizon.</p>

                <div className="features-card-list">
                    <div className="features-card">
                        <div className="features-card-logo-wrapper">
                            <object data="./images/horn.svg" type="image/svg+xml" width="21" className="welcome-title-image">
                                Your browser does not support svg
                            </object>
                        </div>
                        <p className="features-card-text">
                            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out.
                        </p>
                    </div>

                    <div className="features-card">
                        <div className="features-card-logo-wrapper">
                            <object data="./images/calendar.svg" type="image/svg+xml" width="21" className="welcome-title-image">
                                Your browser does not support svg
                            </object>
                        </div>
                        <p className="features-card-text">
                            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out.
                        </p>
                    </div>

                    <div className="features-card">
                        <div className="features-card-logo-wrapper">
                            <object data="./images/file.svg" type="image/svg+xml" width="21" className="welcome-title-image">
                                Your browser does not support svg
                            </object>
                        </div>
                        <p className="features-card-text">
                            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out.
                        </p>
                    </div>

                </div>
            </div>
            <div className="features-image-wrapper">
                <img src="./images/features.png" alt="" />
            </div>
        </article>
        <div className="features-blob"></div>
    </article>
)