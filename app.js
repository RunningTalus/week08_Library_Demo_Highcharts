var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/andrew', function(req,res){
	res.render('andrew');
});

app.get('/dave', function(req,res){
	res.render('dave');
});

app.get('/brian', function(req,res){
	res.render('brian');
});

var server = app.listen(6975, function() {
	console.log('Express server listening on port ' + server.address().port);
});


// to push the changes to your branch
// git push origin [branch name]

// when you complete a feature, merge (push) to master
// git merge [branch name] -- to 
// after it's merged to master
// git push -u origin master