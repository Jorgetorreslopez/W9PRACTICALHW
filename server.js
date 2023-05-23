const express = require('express')

const port = 3002

const app = express()

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello Stranger</h1>')
})

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;
    const greeting = `Yo ${name} whats good!`;
    res.send(greeting)
})


app.listen(port, () => {
    console.log(`listening on ${port}`)
})