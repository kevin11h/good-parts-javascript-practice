var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;

var test = function (num) {
  document.writeln(parse_number.test(num));
};


test('1');
test('number'); //false
test('98.6');
test('132.21.86.100'); // false
test('123.45E-67'); // true
test('123.45D-67'); // false
