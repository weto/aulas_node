const request = require('request');
const token = `6gyW4vm8QKAQRif8QJqUNwEZsOUvatTGRA00wJaFZ3Z3VXQW0yuX4iSiYKqt`

const service = (data) => {
    try {
        const url = `https://www.worldtradingdata.com/api/v1/stock?symbol=${data.company}&api_token=${token}`;
        request({ url: url, json: true }, (err, response) => {
            if (err) {
                throw new Error(`Something went wrong: ${err}`)
            }

            if (response.body.data === undefined) {
                throw new Error(`No data found`)
            }

            const parsedJSON = response.body.data[0]

            const { symbol, price_open, price, day_high, day_low } = parsedJSON

            const data = { symbol, price_open, price, day_high, day_low }

            callback(data)
        })
    } catch (err) {
        return [];
    }
}

module.exports = {
    service
}
