const express = require('express')
const dbService = require('./dbService.js')
const app = express()
const port = 3000

app.get('/customers', async (req, res) => {
    let customers = await dbService.getCustomers();
    res.send(customers);
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})