// Create myObject.  It has a value and an increment
// method.  The increment method takes on aoptional
// parameter.  If the argument is not a number, then 1
// is used as the default

var myObject = {
   value: 0,
   increment: function (inc) {
       this.value += typeof inc === 'number' ? inc : 1;
   }
};

myObject.increment();
document.writeln(myObject.value); // 1

myObject.increment(2);
document.writeln(myObject.value); // 3

// late binding at invocation time , highly reusable
