const axios = require('axios');



const getClima = async (lat, lng) => {

   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=784902319eae4385bf3abd91e5814047&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}