const express = require('express')
const fs = require('node:fs');

const app = express()
app.use(express.json())
const port = 3000

app.post('/add', (req, res) => {
  fs.writeFile('test.txt', JSON.stringify(req.body), err => {
    if (err) {
      console.error(err);
    }
  });
  res.send('Data saved');
})

app.get('/', (req, res) => {
    if (!fs.existsSync('test.txt')) {
        res.send('No data');
        return;
    }
    fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.send(data);
      });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})