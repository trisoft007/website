const express = require('express')
const path = require('path');
const app = express()
const port = 80

// app.set('views', './views')
// app.set('view engine', 'pug');

/*app.get('/', (req, res) => {
  res.send('Hello World! Welcome to Tri Soft')
})*/

// app.get('/', (req, res) => {
//   res.render('index')
// })

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})