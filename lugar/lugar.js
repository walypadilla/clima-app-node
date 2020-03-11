const axios = require('axios');

const getLugarLatLng = async( dir ) => {

    const encodeUrl = encodeURI( dir );

    //header de la api
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: {'x-rapidapi-key': '4693351e3cmsh001f446304a9a8cp10673bjsned84bd2edf85'}
    });

    const resp = await instance.get()

    if ( resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${ dir }`)
    }

    const data      = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon; 

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
