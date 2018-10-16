// Augment Array.prototype
Array.method('reduce', function(f, value) {
  var i;
  for (i = 0; i < this.length; i += 1) {
    value = f(this[i], value);

  }

 return value;
});


// Create an array of numbers
var data = [4,8,15,16,23,42]

// Define two simple functions.  One will add two
// numebrs.  The other will multiply two numebrs.

var add = function (a, b) {
    return a + b;
};

var mult = function (a, b) {

  return a * b;
}


// Invoke the data's reduce method, passing in the
// add function.

var sum = data.reduce(add, 0); // sum is 108

// Give the data array a total function

data.total = function () {
  return this.reduce(add, 0);
};


total = data.total();


