const brainfuck = new (require('../'))();
var times = 0;

function test(code, input) {
    console.log(`Test ${++times} ------------------------------------------------------`);
    const start = Date.now();
    let val;
    try {
        val = brainfuck(code, input);
    } catch (err) { val = err.message; }
    const end = Date.now();
    console.log('Output:', val, '\nResponse time:', end - start, 'ms');
}

// Hello World - Basic
test('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.');
// Hello World - Input
test(',[>,]<[<]>[.>]', 'Hello World');
// Maximum Step Tester
test('+[>+[>+[>+[>+[>+[>+[>+[+]<+]<+]<+]<+]<+]<+]<+].');