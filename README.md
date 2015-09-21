In your console/terminal

>npm install cloudinarize


In app.js/server.js/any file in nodejs application,

>var cloudinarize = require ('cloudinarize');
>var imageArray = cloudinarize.getAll(cloud_name,api_key,api_secret);

If parameters are correct, You will receive

 -An array of url for all images

else

 -An empty array

* "getAll" method currently returns a maximum of 10 images. To edit, set 

> max_results parameter (Default=10. Maximum=500)

For a better understanding on how to build npm packages, visit https://royleekiat.wordpress.com/2015/07/29/how-to-create-and-publish-an-npm-module-for-nodejs-applications/

