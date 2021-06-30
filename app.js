const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

const movieOne = {
  id: 1,
  title: 'Jurassic World: Fallen Kingdom',
  image: 'https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
}

app.use(express.static('public'))

app.engine('handlebars', exphbs({defaultlayout: 'main'}))
app.set('view engine', 'handlebars')
app.get('/', (req, res) => {
  res.render('index', { movie: movieOne})
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})

