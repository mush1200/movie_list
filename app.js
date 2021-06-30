const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const movieList = require('./movies.json')


app.use(express.static('public'))

app.engine('handlebars', exphbs({defaultlayout: 'main'}))
app.set('view engine', 'handlebars')
app.get('/', (req, res) => {
  res.render('index', { movies: movieList.results})
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})

