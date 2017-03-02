import React from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import openWeatherMap from 'openWeatherMap'

let Weather = React.createClass({
    getInitialState: function () {
        return {
                isLoading: false
            };
    },

    handleSearch: function (location) {
        let that = this;

        this.setState({
            isLoading: true
        });

        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMesssage) {
            that.setState({
                isLoading: false
            });
            alert(errorMesssage);
        });
    },

    render: function () {
        let {isLoading, location, temp} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3>Fetching Weather...</h3>
                } else if (location && temp) {
                    return <WeatherMessage location={location} temp={temp}/>;
                }
        };

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
});

export default Weather;
