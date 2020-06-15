import React from "react";

import "./NavigationLine.scss";

export const NavigationLine = () => (
    <div className="navigation-line">
        <nav>
            <ul className="navigation-line-list">
                <li className="navigation-line-item">
                    <a href="#" className="navigation-line-link">Home</a>
                    <div className="line-under-link"></div>
                </li>
                <li className="navigation-line-item">
                    <a href="#" className="navigation-line-link">About us</a>
                    <div className="line-under-link"></div>
                </li>
                <li className="navigation-line-item">
                    <a href="#" className="navigation-line-link">Service</a>
                    <div className="line-under-link"></div>
                </li>
                <li className="navigation-line-item">
                    <a href="#" className="navigation-line-link">Work</a>
                    <div className="line-under-link"></div>
                </li>
                <li className="navigation-line-item">
                    <a href="#" className="navigation-line-link">Contact us</a>
                    <div className="line-under-link"></div>
                </li>
            </ul>
        </nav>
    </div>
);