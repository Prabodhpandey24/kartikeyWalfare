const express = require("express");
const app = express();

const navbarLink = require('../model/navbarLinks');
const memberSlider = require('../model/memberSlider');
const activityJobCard = require('../model/activityJobCard');
const latestActivity = require('../model/latestActivity');
const aboutUs = require('../model/aboutUsData');
const objective = require('../model/objective');
const problems = require('../model/problem');
const applyMember = require('../model/applyMember');
const donateMoney = require('../model/donate');
const upcomingEvents = require('../model/upcomingEvents');

const routes = express.Router();

const multer = require('multer');
const path = require("path");


let Storage = multer.diskStorage({
	destination:'./membershipUpiImages',
	filename:(req,file,cb)=>{
		//cb(null, Date.now(+file.originalname))
		cb(null , file.fieldname+"_"+Date.now()+path.extname(file.originalname));
	}
});

let uploadUpiImage = multer({
	storage : Storage,
	// limits:{fileSize: 1000000}
}).single('file_upi');

let StorageForDonation = multer.diskStorage({
	destination:'./donationUpiImages',
	filename:(req,file,cb)=>{
		//cb(null, Date.now(+file.originalname))
		cb(null , file.fieldname+"_"+Date.now()+path.extname(file.originalname));
	}
});

let uploadDonationImages = multer({
	storage : StorageForDonation,
	// limits:{fileSize: 1000000}
}).single('file_donation_upi');


routes.get('/', async (req,res)=>{
	const navBarData = await navbarLink.find();
	const memberSliders = await memberSlider.find();
	const activityCards = await activityJobCard.find();
	const latestactivity = await latestActivity.find();
	const aboutUsData = await aboutUs.find();
	const objectiveData = await objective.find();
	res.render('index' , {
		navbarLink : navBarData,
		memberSliderData : memberSliders,
		activityCard : activityCards,
		latestactivities : latestactivity,
		aboutUsData : aboutUsData,
		objectiveData: objectiveData,
	});
});

routes.get('/yourProblem', async (req,res)=>{
	const navBarData = await navbarLink.find();
	res.render('problem',{
		navbarLink : navBarData,
	});
});

routes.post('/problemForm', async (req,res)=>{
	try{
		console.log(req.body);
		await problems.create(req.body);
		res.redirect("/");
	}
	catch(e){
		console.log(e);
		res.redirect('/')
	}
});

routes.get('/donate', async (req,res)=>{
	const navBarData = await navbarLink.find();
	res.render('donate',{
		navbarLink : navBarData,
	});
});

routes.post('/donation-submited',uploadDonationImages, async (req,res)=>{
	try{
		console.log(">>>>>>>>.",req.file.filename);
		await  donateMoney.create({
			FullName: req.body.FullName,
			MobileNumber: req.body.MobileNumber,
			City: req.body.City,
			UpiMethod: req.body.UpiMethod,
			UpiUploadImg: req.file.filename,
			Description:req.body.Description,
		})
		res.redirect("/");
	}
	catch(e){
		console.log(e);
		// res.redirect('/')
	}
});

routes.get('/memberApply', async (req,res)=>{
	const navBarData = await navbarLink.find();
	res.render('applyMember',{
		navbarLink : navBarData,
	});
});

routes.post('/member-Apply-Form-Submitted', uploadUpiImage ,async (req,res)=>{
	try{
		console.log(">>>>>>>>.",req.file.filename);
		await applyMember.create({
			FullName: req.body.FullName,
			Gender: req.body.Gender,
			State: req.body.State,
			District: req.body.District,
			City: req.body.City,
			MobileNumber: req.body.MobileNumber,
			Email: req.body.Email,
			UpiMethod: req.body.UpiMethod,
			UpiUploadImg: req.file.filename,
		});
		res.redirect("/");
	}
	catch(e){
		console.log(e);
		// res.redirect('/')
	}
});

routes.get('/upcomingEvents', async (req,res)=>{
	const navBarData = await navbarLink.find();
	const upcomingData = await upcomingEvents.find(); 
	res.render('upcomingEvents',{
		navbarLink : navBarData,
		upcomingData : upcomingData,
	});
});


routes.get('/managent', async (req,res)=>{
	const navBarData = await navbarLink.find();
	const memberSliders = await memberSlider.find(); 
	res.render('managmentTeam',{
		navbarLink : navBarData,
		memberSliderData : memberSliders,
	});
});

routes.get('/ourProjects', async (req,res)=>{
	const navBarData = await navbarLink.find();
	const upcomingData = await upcomingEvents.find(); 
	res.render('ourProject',{
		navbarLink : navBarData,
		upcomingData : upcomingData,
	});
});

routes.get('/contactUs', async (req,res)=>{
	const navBarData = await navbarLink.find();
	res.render('contactUs',{
		navbarLink : navBarData,
	});
});


module.exports = routes;