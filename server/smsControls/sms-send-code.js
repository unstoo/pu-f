var rp = require('request-promise');
const fs = require('fs')
const sigma = JSON.parse(fs.readFileSync('sigmaToken.json', 'utf8'))

// rp(optionsToSendSms)
//     .then(res => fs.writeFileSync('sendSmsResponse.json', JSON.stringify(res)))
//     .catch(e => console.log(e))

const sendSmsCode = async (smsCode) => {
    const optionsToSendSms = {
        uri: 'https://online.sigmasms.ru/api/sendings',
        method: 'POST',
        headers: {
            'Authorization': sigma.token,
            'Content-Type': 'application/json'
        },
        json: true, 
        body: {
            "recipient": "+79046471416",
            "type": "sms",
            "payload": {
                "sender": "B-Media",
                "text": "Your sms code: " + smsCode
            }
        }   
    }


    try {
        const response = await rp(optionsToSendSms)
        // Store in DB: response.id -- status can be checked
        fs.writeFileSync('sendSmsResponse.json', JSON.stringify(response))
        return true
    
    } catch (e) {
        // If token old: update
        console.log(e)
        return false
    }
}
    
sendSmsCode(111771)
