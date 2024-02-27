const mongoose = require("mongoose");

const AboutUs = mongoose.Schema({
	aboutParagraph: String,
});

module.exports = mongoose.model("aboutUs", AboutUs);
