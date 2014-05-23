var mongoose = require('mongoose');
var Population = mongoose.model('population', {
	"populationData": Number,
	"percentData": Number,
	"date": Number
});

var population = [
	{
		"populationData": 3082,
		"percentData": 0,
		"date": 1860
	},
	{
		"populationData": 4420,
		"percentData": 43.4,
		"date": 1870
	},
	{
		"populationData": 5271,
		"percentData": 19.3,
		"date": 1880
	},
	{
		"populationData": 6742,
		"percentData": 27.9,
		"date": 1890
	},
	{
		"populationData": 9664,
		"percentData": 43.4,
		"date": 1900
	},
	{
		"populationData": 11850,
		"percentData": 22.6,
		"date": 1910
	},
	{
		"populationData": 14490,
		"percentData": 22.3,
		"date": 1920
	},
	{
		"populationData": 21596,
		"percentData": 49,
		"date": 1930
	},
	{
		"populationData": 24268,
		"percentData": 12.4,
		"date": 1940
	},
	{
		"populationData": 25099,
		"percentData": 3.4,
		"date": 1950
	},
	{
		"populationData": 28228,
		"percentData": 12.5,
		"date": 1960
	},
	{
		"populationData": 32407,
		"percentData": 14.8,
		"date": 1970
	},
	{
		"populationData": 33619,
		"percentData": 3.7,
		"date": 1980
	},
	{
		"populationData": 35481,
		"percentData": 5.5,
		"date": 1990
	},
	{
		"populationData": 39636,
		"percentData": 11.7,
		"date": 2000
	},
	{
		"populationData": 43079,
		"percentData": 8.7,
		"date": 2010
	}
]

// when the server restarts, checks to see if there are any docs in the db.
Population.find({},function(err, docs){
	// if there are none (docs)
	if(docs.length === 0) {
		// then loop through all the objects inside the arrayß
		for (var i = 0; i < population.length; i++) {
			// create a new instance of the model
			var pop = new Population(population[i]);
			// and save it to the db
			pop.save();
		};
	}
})

module.exports = Population;