module.exports = {
	getAll: function(cloudName,apiKey,apiSecret){
		var cloudinary = require ('cloudinary');
		cloudinary.config({ 
			cloud_name: cloudName, 
			api_key: apiKey, 
			api_secret: apiSecret
		});

		var imageArray = [];

		cloudinary.api.resources(function(result){
			console.log(result.resources.length);
			for(var imj in result.resources){
				if (typeof img.url !== "undefined"){
					imageArray += imj.url;
				}
			} 
			console.log("Image Array has " + imageArray.length + " images");
		});
		
		return imageArray;
	}
}