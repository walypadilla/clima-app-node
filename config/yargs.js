const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirreción de la ciudad, para optener el clima',
        demand: true
    }
})
.help()
.argv;


module.exports = {
    argv
}