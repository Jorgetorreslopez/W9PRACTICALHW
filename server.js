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


app.get('/tip/:total/:tipPercentage', (req, res) => {
    const totalNumber = req.params.total;
    const tipPercentageNumber = req.params.tipPercentage;
    const tipTotal = (tipPercentageNumber/totalNumber) * 100;
    res.send(`The total, ${totalNumber}, and percentage, ${tipPercentageNumber}, will give you a tip of ${tipTotal}.`)
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})