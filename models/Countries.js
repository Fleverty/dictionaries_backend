const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Countries = new Schema({
	name: {
		type: String
	},
	countryCode: {
		type: Number
	},
	isoCode: {
		type: String
	},
	population: {
		type: Number
	},
	area: {
		type: Number
	},
	gdp: {
		type: Number
	},
}, {
	collection: 'countries'
});

module.exports = mongoose.model('Countries', Countries);