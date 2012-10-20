var db = require('mongojs')('BogotaJS', ['postbin']);

exports.get = function(req, res){
  db.postbin.find({},function(error, data){
    res.render('index', { title: 'Express postbin', results: data });
  });
};

exports.post = function(req, res){
  db.postbin.insert(req.body, function(error, data){
    res.send(200);
  });
};