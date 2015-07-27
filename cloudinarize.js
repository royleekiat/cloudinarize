var cloudinary = require ('cloudinary');

module.exports = {
	getAll: function(cloudName,apiKey,apiSecret){
		cloudinary.config({ 
			cloud_name: cloudName, 
			api_key: apiKey, 
			api_secret: apiSecret
		});

		var imageArray = [];

		cloudinary.api.resources(function(result){
			for(var imj in result){
				if (typeof img.url !== "undefined"){
					imageArray += imj.url;
				}
			} 
		});
		console.log("Image Array has " + imageArray.size() + " images");
		return imageArray;
	}
}