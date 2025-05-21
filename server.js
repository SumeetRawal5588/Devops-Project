   // server.js
   'use strict';
   var express = require('express');
   var app = express();
   app.get('/', function (req, res) {
      res.send("<img src='	https://t4.ftcdn.net/jpg/03/93/11/19/240_F_393111901_6yybYVF28GXGOoO6LCnzf9hBj9RZHjXE.jpg' width='780px' >");
   });
   app.listen(3000, function () {
     console.log('Example app listening on port 3000!');
   });
