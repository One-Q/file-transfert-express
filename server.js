const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


const app = express()

app.use(express.static('pages'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/index.html'))
})

app.post('/upload', (req, res) => {
  console.log(req.body)
  console.log(req.files)
  res.end()
})

app.listen(4000, () => {
  console.log('Listening on port 4000')
})