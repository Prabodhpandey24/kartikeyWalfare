const mongoose = require("mongoose");

const Problems = mongoose.Schema({
	FullName:String,
	MobileNumber: String,
	City: String,
	Message: String,
	Description: String
});

module.exports = mongoose.model("ourProblems", Problems);
