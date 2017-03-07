const brainfuck = new (require('../'))();
const util = require('util');
var times = 0;

function test(code, input) {
    console.log(`Test ${++times} ------------------------------------------------------`);
    const start = Date.now();
    let val;
    let error;
    try {
        val = brainfuck.execute(code, input);
    } catch (err) { 
        val = err.result;
        error = err.message;
    }
    console.log(`${error !== undefined ? '        Error : ' + error + '\n' : ''}       Output : ${val.output}
       Memory : ${util.inspect(val.memory)}
        Steps : ${val.steps}
Response Time : ${Date.now() - start}
`);
}

// Hello World - Basic
test('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.');
// Hello World - Input
test(',[>,]<[<]>[.>]', 'Hello World');
// Maximum Step Tester
test('+[>+[>+[>+[>+[>+[>+[>+[+]<+]<+]<+]<+]<+]<+]<+].');