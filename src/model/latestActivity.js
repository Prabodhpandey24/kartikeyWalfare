const mongoose = require("mongoose");

const LatestActivity = mongoose.Schema({
	paragraph: String,
});

module.exports = mongoose.model("latestActivity", LatestActivity);
