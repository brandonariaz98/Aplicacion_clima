const axios = require('axios');

const getLugarLatLng = async( dir ) => {

    const encodeURL = encodeURI( dir );

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeURL }`,
        headers: {'x-rapidapi-key': '492b761726msh1bfe2853add9e7ep134533jsn08609c3c26ae'}
    });

   const resp = await instance.get();
    
    if( resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${ dir }`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const long = data.lon;
    

    
    return{
        direccion,
        lat,
        long
    }
}

module.exports = {
    getLugarLatLng
}

//console.log(argv.direccion);

