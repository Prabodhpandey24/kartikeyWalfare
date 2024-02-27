const mongoose = require("mongoose");

const Slider = mongoose.Schema({
	imgUrl: String,
	name: String,
	designation: String,
	class: String,
});

module.exports = mongoose.model("memberSlider", Slider);
