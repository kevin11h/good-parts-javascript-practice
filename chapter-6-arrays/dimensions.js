Array.dim = function(dimension, initial) {
  var a = [], i;
  for (i = 0; i < dimension; i += 1) {
    a[i] = initial;
  }


  return a;
};


// Make an array containing 10 zeros

var myArray = Array.dim(10, 0);
