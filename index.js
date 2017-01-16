// standard AWS Lambda convention - accept event and context objects
exports.handler = function (event, context) {
    var arrayProcessor = require('./ArrayProcessor').construct();
    var result = arrayProcessor.process(event.input);
    console.log(result);
};


// Uncomment this to test locally.
//
// Example Invocation:
//
// $ node index.js 
// [ 1, 2, 3, 4 ]
//
exports.handler({'input' : [1,2,3,4]});
