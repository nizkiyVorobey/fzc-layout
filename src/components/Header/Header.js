import React from "react";

import "./Header.scss";
import { NavigationLine } from "../NavigationLine/NavigationLine";

export const Header = () => (
    <div className="limiter header">
        <div className="header-navigation">
            <div className="logo-wrapper">
                <p className="logo-text third-title">
                    <a href="#">Dia</a>
                </p>
            </div>
            <NavigationLine />
            <div className="navigation-line-item">
                <a href="#" className="navigation-line-link">Hire us</a>
                <div className="line-under-link"></div>
            </div>
            <div className="burger-menu">
                <div className="burger-item"></div>
                <div className="burger-item"></div>
                <div className="burger-item"></div>
            </div>
        </div>
    </div>
);