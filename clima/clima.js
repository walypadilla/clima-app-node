
const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=960cfc3b18352c391f85e8baf4083750&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}