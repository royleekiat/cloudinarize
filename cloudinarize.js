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
			var arrayLength = result.resources.length;
			console.log(arrayLength);
			for(var i = 0; i < arrayLength; i++){
				var img = result.resources[i];
				if (typeof img.url !== "undefined"){
					imageArray.push(img.url);
				}
			} 
			console.log("Image Array has " + imageArray.length + " images");
		});
		
		return imageArray;
	}
}