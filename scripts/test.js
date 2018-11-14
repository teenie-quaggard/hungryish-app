const test = require('tape');
const script = require("./main.js")

test('tape is working', function(t){
  t.equal(1, 1, "one is equal to one");
  t.end();
});
