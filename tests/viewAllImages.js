var cloudinarize = require('cloudinarize');
var express = require('express');
var imageArray = cloudinarize.getAll("johnextentia","467497563889944","WkDp3kOVm0Lv5IMucXfKtHzrVBc");
var app = express();

app.get('/viewAllImages', function(req,res){
	var images = "<html><body>";
	for(var i = 0; i < imageArray.length; i++){
		images += "<img src='" + imageArray[i] + "'>"
	}
	images += "</body></html>";
	res.send(images)
})

app.listen("4046");