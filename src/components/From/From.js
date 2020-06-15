import React from "react";

import "./From.scss";

export const From = () => (
    <div className="form-wrapper">
        <div className="title-of-block">
            <object data="./images/welcome.svg" type="image/svg+xml" width="21" className="welcome-title-image">
                Your browser does not support svg
                </object>
            <p className="title-text title-of-block-text testemonials-title-text">Send us a message</p>
        </div>
        <form action="">
            <div className="field-list">
                <input type="text" placeholder="Your email" className="field" />
                <input type="text" placeholder="Your name" className="field" />
                <input type="text" placeholder="Your message" className="field" />
            </div>
        </form>

        <div className="btn form-btn">
            <a href="#" className="btn-link form-btn-link">Send</a>
        </div>
    </div>
);