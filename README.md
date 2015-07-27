In your console/terminal

>npm install cloudinarize


In app.js/server.js/any file in nodejs application,

>var roylee = require ('cloudinarize');
>var imageArray = cloudinarize.getAll(cloud_name,api_key,api_secret);

If parameters are correct, You will receive

 -An array of url for all images

else

 -An empty array

 
