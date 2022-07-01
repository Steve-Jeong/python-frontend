const express = require('express')
const app = express()
const port = 3000

const qs = require('querystring')

let input = ''

app.get('/', (req, res) => {
  const handleClick = () => {
    console.log('Hello world')
  }

  let HTML = `
    <h1>Python Input Frontend</h1>
    <form action='/' method='post'>
      <input type='text' name='input' />
      <button type='submit'>제출</button>
    </form>
    <p>입력결과 : ${input}</p>
  `
  res.send(HTML)
})

app.post('/', (req, res) => {
  let body = ''
  req.on('data', (data) => {
    body = body + data;
  })
  req.on('end', () => {
    let post = qs.parse(body)
    input = post.input
  })
  console.log('input :', input)
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})