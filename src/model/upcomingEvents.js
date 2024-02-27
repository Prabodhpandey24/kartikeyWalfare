const mongoose = require("mongoose");

const UpcomingEvents = mongoose.Schema({
	imgUrl:String,
	cardTitle:String,
	Description: String
});

module.exports = mongoose.model("upcomingEvents", UpcomingEvents);
