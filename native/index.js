var Db = require('mongodb').Db,
    Server = require('mongodb').Server;

var server = new Server('localhost', 27017);
var db = new Db('BogotaJS', server);

db.open(function(){
  db.collection('first', function(error, collection){
    var someObject = {test2:'No Value', extra:'stuff'};
    collection.insert(someObject);
  });
});
