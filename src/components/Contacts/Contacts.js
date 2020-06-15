import React from "react";

import "./Contacts.scss";

export const Contacts = () => (
    <div className="contacts">
        <div className="title-of-block">
            <object data="./images/welcome.svg" type="image/svg+xml" width="21" className="welcome-title-image">
                Your browser does not support svg
            </object>
            <p className="title-text title-of-block-text testemonials-title-text">Contact us</p>
        </div>
        <div className="contacts-content">
            <p className="third-title contacts-title">By the same illusion which lifts the horizon.</p>

            <div className="contacts-content-item">
                <p className="contacts-text-title">Call us</p>
                <a href="tel:+654321987" className="contacts-text-description">654 321 987</a>
            </div>
            <div className="contacts-content-item">
                <p className="contacts-text-title">Call us</p>
                <a href="tel:+654321987" className="contacts-text-description">654 321 987</a>
            </div>

            <div className="contacts-link-list">
                <a href="#" className="icon-link">
                    <i className="fa fa-twitter-square icon-twitter social-icon" aria-hidden="true"></i>
                </a>
                <a href="#" className="icon-link">
                    <i className="fa fa-instagram icon-instagram social-icon" aria-hidden="true"></i>
                </a>
                <a href="#" className="icon-link">
                    <i className="fa fa-facebook-square icon-facebook social-icon" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </div>
);