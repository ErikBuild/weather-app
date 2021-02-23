import React from 'react'

import ReactAnimatedWeather from 'react-animated-weather';
const defaults = {
    icon: 'CLEAR_DAY',
    color: 'white',
    size: 100,
    animate: true
  };
function WeatherInfo(props) {
    var weatherIcon = null;
    switch(props.weatherName){
        case "Haze":
        weatherIcon = 'CLOUDY';
        break;
        case "Rain":
        weatherIcon = 'RAIN';
        break;
        case "RAIN":
        weatherIcon = 'CLOUDY'
        break;
        default:
        weatherIcon = 'CLEAR_DAY'  
    }
    return (
        <React.Fragment>
            <div className="col-4 side-bg text-center py-3">
                <ReactAnimatedWeather
                    icon={weatherIcon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
                <h2 className="text-white py-2">{props.weatherName}</h2>
                <div className="d-flex flex-wrap">
                    <div className="d-flex col-12 py-1">
                        <div className="text-white"><strong>Umidità</strong></div>
                        <div className="text-white ml-auto">{props.humidity}%</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white"><strong>Visibilità</strong></div>
                        <div className="text-white ml-auto">{props.visibility} mi</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white"><strong>Velocità del vento</strong></div>
                        <div className="text-white ml-auto">{props.windSpeed} Km/h</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white"><strong>Temperatura</strong></div>
                        <div className="text-white ml-auto">{props.feelsLike}°C</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white"><strong>Temperatura Massima</strong></div>
                        <div className="text-white ml-auto">{props.maxTemp}°C</div>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    );
}
export default WeatherInfo;