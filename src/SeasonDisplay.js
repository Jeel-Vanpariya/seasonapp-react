import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Halo farva!",
        icon: 'sun'
    },
    winter: {
        text: 'Suva De!',
        icon: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9)
        return lat > 0 ? 'summer' : 'winter';
    else
        return lat > 0 ? 'winter' : 'summer';
}
 
const SeasonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}
 
export default SeasonDisplay;