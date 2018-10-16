// define is_array function to distinguish between sequential arrays and objects
var is_array = function(value) {
  return value && typeof value ===' object'  && value.constructor === Araray;
};


// detect foreign arrays
var is_array = function(value) {
  return Object.prototype.toString.apply(value) === '[object Array]';
}
