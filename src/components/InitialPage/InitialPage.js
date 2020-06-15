import React from "react";
import { Header } from "../Header/Header";

import "./InitialPage.scss";
import { SliderComponent } from "../SliderComponent/SliderComponent";

export const InitialPage = () => (
    <>
        <article className="initial-page">
            <div className="initial-page-overlay-list-1">
                <div className="initial-page-overlay-1"></div>
                <div className="initial-page-overlay-list-2">
                    <div className="initial-page-overlay-2"></div>
                    <div className="initial-page-overlay-2"></div>
                    <div className="initial-page-overlay-2"></div>
                </div>

                <div className="triangle"></div>
            </div>
            <div className="limmiter-max">
            <Header />
            <div className="limiter initial-page-content">
                <p className="main-title">Global digital agency</p>
                <p className="text initial-page-text">
                    By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath.
            </p>
                <div className="btn initial-page-btn">
                    <a href="#" className="btn-link initial-page-btn-link">Learn more</a>
                </div>
            </div>
            </div>

        </article>
        <SliderComponent />
    </>

);