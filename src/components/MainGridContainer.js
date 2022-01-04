const MainGridContainer = ({ setTimeFrame }) => {

    // Met à jour le timeframe lorsqu'on clique dessus
    const handleClick = (e) => {
        setTimeFrame(e.target.id);
        if(e.target.id === "daily"){
            document.getElementById("daily").style.color = "hsl(236, 100%, 87%)";
            document.getElementById("weekly").style.color = "hsl(235, 45%, 61%)";
            document.getElementById("monthly").style.color = "hsl(235, 45%, 61%)";
        }
        else if(e.target.id === "weekly"){
            document.getElementById("daily").style.color = "hsl(235, 45%, 61%)";
            document.getElementById("weekly").style.color = "hsl(236, 100%, 87%)";
            document.getElementById("monthly").style.color = "hsl(235, 45%, 61%)";
        }
        else{
            document.getElementById("daily").style.color = "hsl(235, 45%, 61%)";
            document.getElementById("weekly").style.color = "hsl(235, 45%, 61%)";
            document.getElementById("monthly").style.color = "hsl(236, 100%, 87%)";
        };
    };

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
                    <p id="daily" href="#" onClick={handleClick}>Daily</p>
                    <p id="weekly" href="#" onClick={handleClick}>Weekly</p>
                    <p id="monthly" href="#" onClick={handleClick}>Monthly</p>
                </div>
            </div>
        </div>
    )
}

export default MainGridContainer;