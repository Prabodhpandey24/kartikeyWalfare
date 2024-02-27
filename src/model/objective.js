const mongoose = require("mongoose");

const Objective = mongoose.Schema({
	imgUrl: String,
	name: String,
});

module.exports = mongoose.model("objective", Objective);
