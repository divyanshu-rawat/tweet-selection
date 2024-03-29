const express = require('express');
const path = require('path');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public', { maxAge: 4 * 60 * 60 * 1000}));
app.set('port', (process.env.PORT || 5000));

/* For avoiding Heroku $PORT error. */
app.get('/', function(request, response) {
    const result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
