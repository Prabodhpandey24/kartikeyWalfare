const mongoose = require("mongoose");

const ActivityJobCard = mongoose.Schema({
	iconUrl: String,
	jobName: String,
	url: String,
});

module.exports = mongoose.model("activityJobCard", ActivityJobCard);
