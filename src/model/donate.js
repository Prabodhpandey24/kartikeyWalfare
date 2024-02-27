const mongoose = require("mongoose");

const DonateMoney = mongoose.Schema({
	FullName: String,
	MobileNumber: String,
	City: String,
	UpiMethod: String,
	UpiUploadImg: String,
	Description:String,
});

module.exports = mongoose.model("donate", DonateMoney);
