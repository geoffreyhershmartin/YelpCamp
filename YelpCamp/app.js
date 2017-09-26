var express = require("express"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
})

var Campground = mongoose.model("Campground", campgroundSchema);

Campground.create(
	{
		name: "Granite Hill", 
		image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
		description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
	}, function(err, campground){
		if (err){
			console.log(err);
		} else{
			console.log("NEWLY CREATED CAMPGROUND: ");
			console.log(campground);
		}
	}
);

app.get("/", function(req, res){
	res.render("landing");
})

app.get("/campgrounds", function(req, res){
	Campground.find({}, function(err, allcampgrounds){
		if(err){
			console.log(err);
		} else{
			res.render("index", {campground: allcampgrounds});
		}
	})
})

app.get("/campgrounds/new", function(req, res){
	res.render("new");
})

app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description: desc};
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else{
			res.redirect("/campgrounds");
		}
	})
})

app.get("/campgrounds/:id", function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err)
		} else{
			res.render("show", {campground: foundCampground});
		}
	})
})

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("Server has started!")
})