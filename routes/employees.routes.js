const express = require('express');
const app = express();
const countriesRoute = express.Router();
//Сюда переименуй переменную и массив свой добавь, снизу будет пример одной функции, по ней ты поймёшь, как свои делать
const YOUR_ARRAY_FOR_EMPLOYEES = [
	{
		id: 1,
		label: 1,
	},
	{
		id: 2,
		label: 2,
	},
	{
		id: 3,
		label: 3,
	},
]

// Employee

// Get All countries
countriesRoute.route('/employees').get((req, res) => {
	return res.json(YOUR_ARRAY_FOR_EMPLOYEES)
})
//
// // Get single country
countriesRoute.route('/employees/:id').get((req, res) => {
	return res.json(YOUR_ARRAY_FOR_EMPLOYEES.find(el => el.id === +req.params.id));
	// Countries.findById(req.params.id, (error, data) => {
	// 	if (error) {
	// 		return next(error)
	// 	} else {
	// 		res.json(data)
	// 	}
	// })
})

module.exports = countriesRoute;
