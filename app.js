const express = require('express')
const app = express()
const port = 3000
const {engine} = require('express-handlebars')


const urls = require('./public/jsons/url.json') || []
const fs = require('fs')
const urlsPath = './public/jsons/url.json'

app.use(express.static('public'))
app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')




app.get('/', (req, res) => {
  res.render('index')
})

app.get('/shorten', (req, res) => {
  const inputUrl = req.query.url
  if(inputUrl.length > 0){
    const shortUrl = shorten(inputUrl, urls)
    res.render('shorten', { shortUrl })
  } 
})

app.get('/:id', (req, res) => {
  const id = req.params.id
  const url = urls.find((data) => data.id === id)
  
  // 如果找不到對應id則導回首頁
  if (!url) {
    res.redirect('/')
  }

  res.redirect(url.orig)
})


app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})


function shorten(inputUrl, data) {
  let urls = data
  let id = ''
  
  if(urls.some((url) => url.orig === inputUrl)) {
    id = urls.find((url) => url.orig === inputUrl).id
  } else {
    id = Math.random().toString(36).substring(2, 7)
    urls.push({
      id: id,
      orig: inputUrl
    })

    // 將更新的資料寫入 url.json
    fs.writeFile(urlsPath, JSON.stringify(urls), function(err) {
      if(err) {
        console.log('Data written failed.')
        return console.error(err)
      }
      console.log('Data written successfully!')
    })
  }

  return id
}