import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import MainGridContainer from "../components/MainGridContainer";
const dataJson = require("../data/data.json") //Import de data.json

const DailyVue = () => {

    return (

        <main>
            <div className="grid">
                <MainGridContainer />

                {dataJson.map(x => (

                    <div className={`${x.title}`} key={uuidv4()}>
                        <img src={`./images/icon-${x.title}.svg`} alt="icon" />
                        <div className="item-container">
                            <div className="current-time">
                                <h2>{x.title}</h2>
                                <p>{x.timeframes.daily.current}hrs</p>
                            </div>
                            <div className="previous-time">
                                <img src="./images/icon-ellipsis.svg" alt="icon ellipsis" />
                                <p>Last week - {x.timeframes.daily.previous}hrs</p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </main>
    )
}

export default DailyVue;