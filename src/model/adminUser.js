const mongoose = require("mongoose");

const adminUserSchema = new mongoose.Schema({
    FullName: String,
    MobileNumber: String,
    UserId: String,
    Email: String,
    Password: String
});

module.exports = mongoose.model("AdminUser", adminUserSchema);
