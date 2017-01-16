var arrayProcessor = require('./ArrayProcessor').construct();

// standard AWS Lambda convention - accept event and context objects
exports.handler = function (event, context) {
    var retval = arrayProcessor.process(event.input);
    console.log(retval);
};


// Uncomment this to test locally.
//
// Example Invocation:
//
// $ node index.js 
// [ 1, 2, 3, 4 ]
//
exports.handler({'input' : [1,2,3,4]});
