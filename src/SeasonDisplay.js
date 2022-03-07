import React from 'react';

const seasonConfig = {

    Yaz: {
        text: "Yanıyoruz, Denize Menize Gidelim!",
        iconName: "sun"
    },
    Kış: {
        text: "Çok Soğuk, Hava buz Gibi",
        iconName: "snowflake"
    }

    
};

const getSeason = (lat, month) => {

    if ( month > 2 && month < 9) {
        return lat > 0 ? 'Yaz' : 'Kış';
    } else {
        return lat > 0 ? 'Kış' : 'Yaz';
    }

}

const SeasonDisplay = props =>{
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} =  seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon` } />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon` } />

        </div>
    );
};

export default SeasonDisplay;