require('dotenv').config()
const express = require("express");
const app = express();
// file import

const hbs = require("hbs");

const bodyParser = require("body-parser");

app.use(
	bodyParser.urlencoded({
	  extended: true,
	})
);

const route = require("./routes/route");
app.use("", route);

// db connect
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

const NavbarLinks = require("./model/navbarLinks");
const Slider = require("./model/memberSlider");
const ActivityCard = require("./model/activityJobCard");
const LatestActivity = require("./model/latestActivity");
const AboutUs = require("./model/aboutUsData");
const Objective = require("./model/objective");
const Upcoming = require("./model/upcomingEvents");


const about = async () => {
  let Data = await Upcoming.create([
	{
		imgUrl: '/static/img/agri.png',
		cardTitle: 'Agriculture',
		Description: "Good to say that we are going to launch new program"
	},
	
  ]);

 // let result = await Data.create();
  console.log(Data);
};

//about();

// static file for css and js

app.use("/static", express.static("public"));

// view engine hbs
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

app.listen(process.env.PORT || 3000);
