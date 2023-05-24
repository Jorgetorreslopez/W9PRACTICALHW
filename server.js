const express = require("express");

const port = 3002;

const app = express();

app.get("/greeting", (req, res) => {
  res.send("<h1>Hello Stranger</h1>");
});

app.get("/greeting/:name", (req, res) => {
  const name = req.params.name;
  const greeting = `Yo ${name} whats good!`;
  res.send(greeting);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const totalNumber = req.params.total;
  const tipPercentageNumber = req.params.tipPercentage;
  const tipTotal = (tipPercentageNumber / totalNumber) * 100;
  res.send(
    `The total, ${totalNumber}, and percentage, ${tipPercentageNumber}, will give you a tip of ${tipTotal}.`
  );
});

app.get("/magic/:question", (req, res) => {
  const question = req.params.question;
  const ballAnswers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  const randomAnswer = Math.floor(Math.random() * ballAnswers.length)
  const trueAnswer = ballAnswers[randomAnswer]

  res.send(trueAnswer)

});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
