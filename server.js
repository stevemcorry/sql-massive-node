var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');

var app = module.exports = express();
var massiveInstance = massive.connectSync({connectionString: 'postgres://postgres:yeah1buddy@localhost/sql-massive-node'});

app.use(bodyParser.json());
app.use(cors());
app.set('db', massiveInstance);
var db = app.get('db');
var productCtrl = require('./productCtrl.js');


app.get('/product', productCtrl.getOne);

app.get('/products', productCtrl.getAll);

app.post('/product', productCtrl.create);

app.put('/product', productCtrl.update);

app.delete('/product', productCtrl.delete);

app.listen(3000, function() {
  console.log('simple enough');
});
