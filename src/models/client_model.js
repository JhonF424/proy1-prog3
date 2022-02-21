const mongoose = require('mongoose')
const client_schema = mongoose.Schema({
    name:{
		type: String,
		require: true
	},
	lastname:{
		type: String,
		require: true
	},
    addres: {
        city:{
			type: String,
			require: true
		},
		street:{
			type: String,
			require: true
		},
		lat:{
			type: Number,
			require: true
		},
		lon:{
			type: Number,
			require: true
		}
    },
	account_bank:{
		type: String,
		require: true
	}
})

module.exports = mongoose.model('client_document', client_schema)