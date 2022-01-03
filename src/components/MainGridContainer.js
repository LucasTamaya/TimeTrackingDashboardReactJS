const MainGridContainer = () => {
    return (
        <div>
            <div class="main-grid-container">
                <div class="reporter-container">
                    <div class="avatar"></div> 
                    <div class="reporter-txt">
                        <p>Report for</p>
                        <p>Jeremy Robson</p>
                    </div>
                </div>
                <div class="timeframe">
                    <a id="daily" href="#">Daily</a>
                    <a id="weekly" href="#">Weekly</a>
                    <a id="monthly" href="#">Monthly</a>
                </div>
            </div>
        </div>
    )
}

export default MainGridContainer;