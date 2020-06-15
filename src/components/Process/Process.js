import React from "react";

import "./Process.scss";
import { ProcessDescription } from "./components/ProcessDescription/ProcessDescription";
import { ProcessCardList } from "./components/ProcessCardList/ProcessCardList";

export const Process = () => (
    <article className="process">
        <div className="process-wrapper limmiter-max">
            <ProcessDescription />
            <ProcessCardList />
        </div>
    </article>
);
