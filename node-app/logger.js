//we will image that we are using remote login message to log message
//they give us a url and we can send http request to log messages to cloud

const url = 'http://mylogger.io/log';

function log(message) {
    //Send an HTTP request
    console.log(message);
}

/*
- both of these are scoped to this module (they are 'private');
-in app.js we want to use this module
-we should be able to use the logger module in app.js
- to access the log function by calling it from app module
we have to make it 'public'
- We have the module object and a property of 'exports'
- the property is set to an empty object
- Anything that is added to that object,
is exported from the module and avail outside of this module.
- We will use a method to do this:
*/

//adding method of log to exports obj
// setting it to log function above
// the object we are exporting has single method of log

//module.exports.log = log;
//if we export the url, we may call it endPoint
// we only want to export subset of members to outside
// NOW, we NEED TO LOAD MODULE AND USE IT IN app.js


//Sometimes we may only want to export a function:
module.exports = log;