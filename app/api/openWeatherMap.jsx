import axios from 'axios'

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=5e67b29e542516c4fdbdd62ac54b82ef';

// Default  5e67b29e542516c4fdbdd62ac54b82ef
// m1nd     65fb4ac8fd3f2c095bcefb594dc62986
// http://api.openweathermap.org/data/2.5/weather?q=Navashino&units=metric&appid=5e67b29e542516c4fdbdd62ac54b82ef

export default {
    getTemp: function (location) {
        let encodedLocation = encodeURIComponent(location);
        let requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });

    }
};
