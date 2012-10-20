var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'BogotaJS');

var schema = mongoose.Schema({
  name: { type: 'string', unique: true}
});

var Cat = db.model('cats', schema);

exports.list = function(req, res){
  Cat.find(function(err, cats){
    res.render('index', { title: 'Cats Directory', cats:cats, error: err || req.query.err });
  });
};

exports.create = function(req, res){
  var newCat = new Cat(req.body);
  newCat.save(function(err){
    if(err){ res.redirect('/cats?err='+err.err);}
    else{ res.redirect('/cats'); }
  });
};