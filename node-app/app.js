
/* NOde module system:
    - operating system
    - file system
    - events
    - http
    - How to create modules
    */
//    console.log();// a global obj and can be accessed in any file
//    setTimeout(); //call a function after delay, can use this on client or inside browser or node
//    clearTimeout();
//    setInterval();

/* all functions above belong to window object
 - when we declare var, that var is available via the window obj
- In node, we DO NOT HAVE THE WINDOW OBJECT
- With node, we have another object called 'global'*/

// var message = '';
// console.log(global.message);
/*this would return undefined
- WHY?
    The vars and functions are not added to global obj
    - they are only scoped to THIS FILE
    - This is because of Node's modular system
    */
/*
   -in order to build reliable apps, we should aboid defining vars in global scope
   -Instead we need modularity, create small modules where we define vars and functions
   - This way, vars and functions with same name don't override others
   - At core of node, is concept called module
   - Every file in node app is considered a module
   - vars and functions are only scoped to that file and are 'private'
   - IF you want to use a var or function in another module, outside that module
   you have to export it and make it 'public'
*/


//loading logger module:
//this require function returns the obj that is exported from target module
const log = require('./logger');

//this returns  an obj and a single method of log
//we can call this method in app.js

log('message'); //we are calling the log function from logger.js

//when we define a module, we export one or more members
// We then load the module by using the require function
//jshint will scan js code for errors

