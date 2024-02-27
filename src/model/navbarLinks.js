const mongoose = require("mongoose");

const NavbarLinks = mongoose.Schema({
      linkName: String,
      linkUrl: String,
      subLink: [
        {
          sublinkName: String,
          sublinkUrl: String,
        },
      ],
    },
);

module.exports = mongoose.model("navbarLink", NavbarLinks);
