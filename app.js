'use strict';

let express = require('express');
let path = require('path');
//create app
let app = express();

app.use(express.static('build'));
app.get('/', (req, res) => {
  res.sendFile('/build/index.html');
});

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});
app.listen(4000, function() {
  console.log("app is listening port ** 4000");
});
