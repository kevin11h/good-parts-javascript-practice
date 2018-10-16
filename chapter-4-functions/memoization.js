var fibonacci = function (n) {
  return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
});

var fibonacci = (function() {
  var memo = [0, 1];
  var fib = function(n) {
    var result = memo[n];
     if (typeof result !== 'number') {

       result = fib(n-1) + fib(n-2);
       memo[n] = result;
     }

     return result;
  };
  return fib;
}());


// Generalize by making a function that helps us make memoized functions


var memoizer = function (memo, formula) {
  var recur = function (n) {
    var result = memo[n];

    if (typeof result !== 'number') {
        result = formula(recur, n);
        memo[n] = result;

    }

    return result;

  };
  return recur;
};

var fibonacci = memoizer([1, 1], function (recur, n) {

  return n * recur(n - 1);

});
