const express = require('express')
const app = express()
const port = 3000

app.get('/index', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})