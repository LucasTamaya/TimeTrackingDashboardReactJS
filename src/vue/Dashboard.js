import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import MainGridContainer from "../components/MainGridContainer";
const dataJson = require("../data/data.json") //Import de data.json

const Dashboard = () => {

    const [timeFrame, setTimeFrame] = useState("daily");

    return (

        <main>
            <div className="grid">
                <MainGridContainer setTimeFrame={setTimeFrame}/>

                {timeFrame && dataJson.map(x => (

                    <div className={`${x.id}`} key={uuidv4()}>
                        <img src={`./images/icon-${x.id}.svg`} alt="icon" />
                        <div className="item-container">
                            <div className="current-time">
                                <h2>{x.title}</h2>
                                {timeFrame === "daily" ? <p>{x.timeframes.daily.current}hrs</p> : timeFrame === "weekly" ? <p>{x.timeframes.weekly.current}hrs</p> : <p>{x.timeframes.monthly.current}hrs</p>}
                                {/* <p>{x.timeframes.daily.current}hrs</p> */}
                            </div>
                            <div className="previous-time">
                                <img src="./images/icon-ellipsis.svg" alt="icon ellipsis" />
                                {timeFrame === "daily" ? <p>Last day -{x.timeframes.daily.previous}hrs</p> : timeFrame === "weekly" ? <p>Last week -{x.timeframes.weekly.previous}hrs</p> : <p>Last month -{x.timeframes.monthly.previous}hrs</p>}
                                {/* <p>Last week - {x.timeframes.daily.previous}hrs</p> */}
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </main>
    )
}

export default Dashboard;