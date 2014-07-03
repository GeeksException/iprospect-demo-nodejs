var express = require("express");
var app = express();
var port = 3700;

//app.set('view engine', require('jade'));
//app.engine('html', require('jade'));
//app.set('views', __dirname + '/');

app.use(express.static(__dirname + '/public'));

/*app.get("/", function(req, res){
    res.status(200).render("index");
});*/

app.listen(port);
console.log("Listening on port " + port);