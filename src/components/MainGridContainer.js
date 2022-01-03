const MainGridContainer = () => {
    return (
        <div>
            <div className="main-grid-container">
                <div className="reporter-container">
                    <div className="avatar"></div> 
                    <div className="reporter-txt">
                        <p>Report for</p>
                        <p>Jeremy Robson</p>
                    </div>
                </div>
                <div className="timeframe">
                    <a id="daily" href="#">Daily</a>
                    <a id="weekly" href="#">Weekly</a>
                    <a id="monthly" href="#">Monthly</a>
                </div>
            </div>
        </div>
    )
}

export default MainGridContainer;