var mongoose = require('mongoose');
var Employer = mongoose.model('employer', {
	"employer": String,
	"percentage": Number
});

var employer = [
	{
		"employer": "State of Missouri",
		"percentage": 67.8
	},
	{
		"employer": "Scholastic",
		"percentage": 5.5
	},
	{
		"employer": "Capital Regional Medical Center",
		"percentage": 5.4
	},
	{
		"employer": "St. Mary's Health Center",
		"percentage": 4.4
	},
	{
		"employer": "Jefferson City Public School District",
		"percentage": 4.1
	},
	{
		"employer": "Wal-Mart",
		"percentage": 2.9
	},
	{
		"employer": "Central Bank",
		"percentage": 2.8
	},
	{
		"employer": "ABB Inc.",
		"percentage": 2.8
	},
	{
		"employer": "Jefferson City Medical Group",
		"percentage": 2.1
	},
	{
		"employer": "RR Donnelley",
		"percentage": 1.9
	}
]

// when the server restarts, checks to see if there are any docs in the db.
Employer.find({},function(err, docs){
	// if there are none (docs)
	if(docs.length === 0) {
		// then loop through all the objects inside the arrayß
		for (var i = 0; i < employer.length; i++) {
			// create a new instance of the model
			var emp = new Employer(employer[i]);
			// and save it to the db
			emp.save();
		};
	}
})

module.exports = Employer;