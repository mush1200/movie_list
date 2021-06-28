const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.use(express.static('public'))

app.engine('handlebars', exphbs({defaultlayout: 'main'}))
app.set('view engine', 'handlebars')
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})

