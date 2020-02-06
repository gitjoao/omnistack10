module.exports = function parseStringToArray (arrayAsString) {
    return arrayAsString.split(',').map(tec => tec.trim())
}