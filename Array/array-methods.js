// array.concat(item...)
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true);
// c is ['a', 'b', 'c', 'x', 'y', 'z', true]

// array.join(separator)
var a = ['a', 'b', 'c'];
a.push('d');
var c = a.join('');  // c is 'abcd'

// array.pop()
var a = ['a', 'b', 'c'];
var c = a.pop();  // a is ['a', 'b'] & c is 'c'

Array.method('pop', function() {
    return this.splice(this.length - 1, 1)[0];
});

// array.push(item...)
var a = ['a','b','c'];
var b = ['x', 'y', 'z'];
var c = a.push(b, true);
// a is ['a', 'b', 'c', ['x', 'y', 'z'], true]
// c is 5;


Array.method('push', function () {
  this.splice.apply(
    this,
    [this.length, 0].concat(Array.prototype.slice.apply(arguments)));
  return this.length;
});


// array.reverse()
var a = ['a','b','c'];
var b = a.reverse();
// both a and b are ['c','b', 'a']


// array.shift()
var a = ['a','b','c'];
var c = a.shift();  // a is ['b', 'c'] & c is 'a'

Array.method('shift', function () {
    return this.splice(0, 1)[0];
});

// array.slice (start, end)
var a = ['a', 'b', 'c'];
var b = a.slice(0, 1);  // b is ['a']
var c = a.slice(1);  // c is ['b', 'c']
var d = a.slice(1, 2);  // d is ['b']


// aray.sort(comparefn)

var n = [4,8,15,16,23,42];
n.sort();

// n is [15, 16, 23,4, 42, 8]
n.sort(function (a, b) {
    return a  - b;
});

var m = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];

m.sort(function(a, b) {
    if (a === b) {
        return 0;
    }

    if (typeof a === typeofb) {
        return a < b ? -1 : 1;
    }

    return typeof a < typeof b ? -1 : 1;
});

// array.splice
// do not confuse slice with splice


var a = ['a', 'b', 'c'];
var r = a.splice(1, 1, 'ache', 'bug');

// a is ['a', 'ache', 'bug', 'c']
// r is ['b']  returns array of deleted elements

// array.unshift(item...)
var a = ['a', 'b', 'c'];
var r = a.unshift('?', '@');
// a is ['?', '@', 'a','b', 'c'
// r is 5

Array.method('unshift', function() {
  this.splice.apply(this, [0, 0].concat(Array.prototype.slice.apply(arguments)));
  return this.length;
});


