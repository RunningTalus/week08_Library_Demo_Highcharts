var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jc-data');
var Employer = require('./models/employer.js');
var Population = require('./models/population.js');
var Temperature = require('./models/temp.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/api/data',function(req,res){
	Employer.find({}, function(err, employers){
		Population.find({}, null, {sort:"date"}, function(err, population){
			// need to add something for climate data
			Temperature.find({}, null, {sort:"monthCounter"}, function(err, temperature){
				res.send(
					{
						employerData: employers,
						populationData: population,
						tempData: temperature
						// temperature: climate
					});
			})
		});
	});
})

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