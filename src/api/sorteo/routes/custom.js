module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/getBarCode',
            handler: 'sorteo.getBarCode',
            config: {
                auth: false
            }
        }
    ]
}