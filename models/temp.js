var mongoose = require('mongoose');
var Temperature = mongoose.model('temperate',{
	"min": Number,
	"max": Number,
	"month": String,
	"monthCounter": Number
})

var temperature = [
	{
		"min": -6.7,
		"max": 4.4,
		"month": "Jan",
		"monthCounter": 1
	},
	{
		"min": -4.7,
		"max": 7.4,
		"month": "Feb",
		"monthCounter": 2
	},
	{
		"min": 0.1,
		"max": 13.1,
		"month": "Mar",
		"monthCounter": 3
	},
	{
		"min": 6.2,
		"max": 19.3,
		"month": "Apr",
		"monthCounter": 4
	},
	{
		"min": 11.7,
		"max": 23.9,
		"month": "May",
		"monthCounter": 5
	},
	{
		"min": 17.1,
		"max": 28.6,
		"month": "Jun",
		"monthCounter": 6
	},
	{
		"min": 19.6,
		"max": 31.3,
		"month": "Jul",
		"monthCounter": 7
	},
	{
		"min": 18.6,
		"max": 31,
		"month": "Aug",
		"monthCounter": 8
	},
	{
		"min": 13.3,
		"max": 26.6,
		"month": "Sep",
		"monthCounter": 9
	},
	{
		"min": 6.7,
		"max": 20.3,
		"month": "Oct",
		"monthCounter": 10
	},
	{
		"min": 1.1,
		"max": 13.2,
		"month": "Nov",
		"monthCounter": 11
	},
	{
		"min": -5,
		"max": 5.8,
		"month": "Dec",
		"monthCounter": 12
	}
];

// when the server restarts, checks to see if there are any docs in the db.
Temperature.find({},function(err, docs){
	// if there are none (docs)
	if(docs.length === 0) {
		// then loop through all the objects inside the arrayß
		for (var i = 0; i < temperature.length; i++) {
			// create a new instance of the model
			var temp = new Temperature(temperature[i]);
			// and save it to the db
			temp.save();
		};
	}
})

module.exports = Temperature;