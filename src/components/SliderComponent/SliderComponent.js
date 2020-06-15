import React from "react";

import "./SliderComponent.scss";

export const SliderComponent = () => (
    <div className="slider-wrapper">
        <div className="slider-image-wrapper">
            <div className="slider-buttons-container">
                <div className="slider-buttons-wrapper">
                    <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="slider-btn-prev">
                        <path d="M13.2305 0.999024L1.23047 12.999L13.2305 24.999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="slider-btn-next">
                        <path d="M13.2305 0.999024L1.23047 12.999L13.2305 24.999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className="slider-image-content-wrapper">
                <img src="./images/slider-1.jpg" alt="slider-item" className="slider-image" />
                <div className="slider-photo-description">
                    <p className="slider-description-title">intro</p>
                    <p className="slider-description-content">By the same illusion which lifts the horizon.</p>
                </div>
            </div>
        </div>

        <div className="slider-social-link-wrapper">
            <ul className="slider-social-link-list">
                <li className="slider-social-link-item">
                    <a href="#" className="slider-social-link">Facebook</a>
                </li>
                <li className="slider-social-link-item">
                    <a href="#" className="slider-social-link">Twitter</a>
                </li>
                <li className="slider-social-link-item">
                    <a href="#" className="slider-social-link">Instagram</a>
                </li>
            </ul>
        </div>
    </div>
);
