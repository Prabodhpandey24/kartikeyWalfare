const mongoose = require("mongoose");

const ApplyMember = mongoose.Schema({
	FullName: String,
	Gender: String,
	State: String,
	District: String,
	City: String,
	MobileNumber: String,
	Email: String,
	UpiMethod: String,
	UpiUploadImg: String,
});

module.exports = mongoose.model("applyMembers", ApplyMember);
