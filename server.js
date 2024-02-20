const express = require('express');
const app = express();
const port = 3000;

/* Middleware */
app.set('view engine', 'ejs');
app.use(express.static('public'));


/* Routes */
app.get('/', (req, res) => {
  res.render('home');
});


/* app.get('/', function (req, res) {
  res.send('Hello World')
})
*/

app.listen(port, () => {
  console.log(`De server luistert op http://localhost:${port}`);
});
