import { useState } from "react";
import useFetch from "../useFetch";
import MainGridContainer from "../components/MainGridContainer";

const DailyVue = () => {

    const { data, chargement } = useFetch("../../public/data/data.json");

    return (

        <main>
            <div class="grid">

                <MainGridContainer />

                <div class="work">
                    <img src="./images/icon-work.svg" alt="icon work" />
                    <div class="item-container">
                        <div class="current-time">
                            <h2>Work</h2>
                            <p>32hrs</p>
                        </div>
                        <div class="previous-time">
                            <img src="./images/icon-ellipsis.svg" alt="icon ellipsis" />
                            <p>Last week - 36hrs</p>
                        </div>
                    </div>
                </div>

                <div class="play">
                    <img src="./images/icon-play.svg" alt="icon play" />
                    <div class="item-container">
                        <div class="current-time">
                            <h2>Work</h2>
                            <p>10hrs</p>
                        </div>
                        <div class="previous-time">
                            <img src="./images/icon-ellipsis.svg" alt="icon ellipsis" />
                            <p>Last week - 8hrs</p>
                        </div>
                    </div>
                </div>

                <div class="study">
                    <img src="./images/icon-study.svg" alt="icon study" />
                    <div id="study" class="item-container">
                        <div class="current-time">
                            <h2>Work</h2>
                            <p>4hrs</p>
                        </div>
                        <div class="previous-time">
                            <img src="./images/icon-ellipsis.svg" alt="icon ellipsis" />
                            <p>Last week - 7hrs</p>
                        </div>
                    </div>
                </div>

                <div class="exercise">
                    <img src="./images/icon-exercise.svg" alt="icon exercise" />
                    <div id="exercise" class="item-container">
                        <div class="current-time">
                            <h2>Work</h2>
                            <p>4hrs</p>
                        </div>
                        <div class="previous-time">
                            <img src="./images/icon-ellipsis.svg" alt="icon ellipsis" />
                            <p>Last week - 5hrs</p>
                        </div>
                    </div>
                </div>

                <div class="social">
                    <img src="./images/icon-social.svg" alt="icon social" />
                    <div id="social" class="item-container">
                        <div class="current-time">
                            <h2>Work</h2>
                            <p>5hrs</p>
                        </div>
                        <div class="previous-time">
                            <img src="./images/icon-ellipsis.svg" alt="icon ellipsis" />
                            <p>Last week - 10hrs</p>
                        </div>
                    </div>
                </div>

                <div class="self-care">
                    <img src="./images/icon-self-care.svg" alt="icon selfcare" />
                    <div id="self-care" class="item-container">
                        <div class="current-time">
                            <h2>Work</h2>
                            <p>2hrs</p>
                        </div>
                        <div class="previous-time">
                            <img src="./images/icon-ellipsis.svg" alt="icon ellipsis" />
                            <p>Last week - 2hrs</p>
                        </div>
                    </div>
                </div>
            </div>

        </main>

    )

}

export default DailyVue;