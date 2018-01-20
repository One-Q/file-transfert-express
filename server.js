const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const multer = require('multer')

const upload = multer({ dest: 'pages/images/' })
const app = express()

app.use(express.static('pages'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/index.html'))
})

app.post('/upload', upload.single('fileFront'), (req, res) => {
  console.log(req.body.fileFront)
  console.log(req.files)
  res.end()
})

app.listen(4000, () => {
  console.log('Listening on port 4000')
})