const express = require('express');

const app = express();

app.use(require('./app'));

const server = app.listen( process.env.PORT || 3000, function(){
  console.log('Listening on port ' + server.address().port);
});
