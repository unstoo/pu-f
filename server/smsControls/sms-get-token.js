var rp = require('request-promise');
const fs = require('fs')
const sigma = JSON.parse(fs.readFileSync('sigmaCredentials.json', 'utf8'))

const optionsToGetToken = {
    uri: 'https://online.sigmasms.ru/api/login',
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    json: true,
    body: {
        username: sigma.username,
        password: sigma.password
    }
};

const getToken = async () => {
    try {
        const response = await rp(optionsToGetToken)
        fs.writeFileSync('sigmaToken.json', JSON.stringify(response))
        return true
    
    } catch (e) {
        console.log(e)
        return false
    }
}

getToken()