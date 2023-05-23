const express = require('express')

const port = 3002

const app = express()

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello Stranger</h1>')
})


app.listen(port, () => {
    console.log(`listening on ${port}`)
})