import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.send('hello NLW');
})

app.listen(3333);