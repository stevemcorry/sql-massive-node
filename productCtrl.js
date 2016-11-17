var app = require('./server.js');
var db = app.get('db');

 module.exports = {
   getOne: function(req,res,next) {
        db.read_product([req.query.id],function(err, products){
            res.send(products);
          });
   },
   getAll: function(req,res,next) {
        db.read_products(function(err, products){
            res.send(products);
          });
   },
   create: function(req,res,next) {
     db.create_product([req.body.name,req.body.description,req.body.price,req.body.imageurl],function(err,products) {
       res.send(products);
     });
   },
   update: function(req,res,next) {
     db.update_product([req.query.id, req.body.description], function(err,products) {
       res.send(products);
     });
   },
   delete: function(req,res,next) {
     db.delete_product([req.query.id], function(err,product) {
       res.send(product);
     });
   }
 };
