const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Clubs = new Schema({
	name: {
		type: String,
	},
	countryId: {
		type: String,
	},
	nextMatchDay: {
		type: String,
	},
	numberOfGroup: {
		type: Number,
	},
	expectingMoney: {
		type: Number,
	},
}, {
	collection: 'clubs'
});

module.exports = mongoose.model('Clubs', Clubs);