const express = require('express');
const app = express();
const countriesRoute = express.Router();

// Employee model
let Countries = require('../models/Countries');
let Clubs = require('../models/Club');

// Add country
countriesRoute.route('/country/create').post((req, res, next) => {
	Countries.create(req.body, (error, data) => {
		if (error) {
			return next(error)
		} else {
			res.json(data)
		}
	})
});

// Get All countries
countriesRoute.route('/country').get((req, res) => {
	Countries.find((error, data) => {
		if (error) {
			return next(error)
		} else {
			res.json(data)
		}
	})
})

// Get single country
countriesRoute.route('/country/read/:id').get((req, res) => {
	Countries.findById(req.params.id, (error, data) => {
		if (error) {
			return next(error)
		} else {
			res.json(data)
		}
	})
})


// Update country
countriesRoute.route('/country/update/:id').put((req, res, next) => {
	console.log(1);
	Countries.findByIdAndUpdate(req.params.id, {
		$set: req.body
	}, (error, data) => {
		if (error) {
			console.log(error)
			return next(error);
		} else {
			res.json(data)
			console.log('Data updated successfully')
		}
	})
})

// Delete country
countriesRoute.route('/country/delete/:id').delete((req, res, next) => {
	Countries.findByIdAndRemove(req.params.id, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.status(200).json({
				msg: data
			})
		}
	})
})

// Add clubs
countriesRoute.route('/club/create').post((req, res, next) => {
	Clubs.create(req.body, (error, data) => {
		if (error) {
			return next(error)
		} else {
			res.json(data)
		}
	})
});

// Get All clubs
countriesRoute.route('/club').get((req, res) => {
	Clubs.find((error, data) => {
		if (error) {
			return next(error)
		} else {
			res.json(data)
		}
	})
})

// Get single clubs
countriesRoute.route('/club/read/:id').get((req, res) => {
	Clubs.findById(req.params.id, (error, data) => {
		if (error) {
			return next(error)
		} else {
			res.json(data)
		}
	})
})


// Update clubs
countriesRoute.route('/club/update/:id').put((req, res, next) => {
	Clubs.findByIdAndUpdate(req.params.id, {
		$set: req.body
	}, (error, data) => {
		if (error) {
			console.log(error)
			return next(error);
		} else {
			res.json(data)
			console.log('Data updated successfully')
		}
	})
})

// Delete clubs
countriesRoute.route('/club/delete/:id').delete((req, res, next) => {
	Clubs.findOneAndRemove(req.params.id, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.status(200).json({
				msg: data
			})
		}
	})
})

module.exports = countriesRoute;