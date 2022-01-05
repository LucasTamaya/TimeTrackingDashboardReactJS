const MainGridContainer = ({ setTimeFrame }) => {

    // Met à jour le timeframe lorsqu'on clique dessus et change la couleur de la font
    const handleClick = (e) => {
        setTimeFrame(e.target.id);
        if(e.target.id === "daily"){
            document.getElementById("daily").classList.add("active");
            document.getElementById("weekly").classList.remove("active");
            document.getElementById("monthly").classList.remove("active");
        }
        else if(e.target.id === "weekly"){
            document.getElementById("daily").classList.remove("active");
            document.getElementById("weekly").classList.add("active");
            document.getElementById("monthly").classList.remove("active");
        }
        else{
            document.getElementById("daily").classList.remove("active");
            document.getElementById("weekly").classList.remove("active");
            document.getElementById("monthly").classList.add("active");
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
                    <p id="daily" className="active"onClick={handleClick}>Daily</p>
                    <p id="weekly" onClick={handleClick}>Weekly</p>
                    <p id="monthly" onClick={handleClick}>Monthly</p>
                </div>
            </div>
        </div>
    )
}

export default MainGridContainer;