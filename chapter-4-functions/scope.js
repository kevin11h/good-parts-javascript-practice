// Scope controls visibility and lifetimes of variables and parameters
// reduce collisions and provides automatic memory management

var foo = function() {
    var a = 3, b = 5;


    var bar = function () {
        var b = 7, c = 11;

// At this point, a is 3, b is 7, and c is 11


    a += b + c;

// At this point, a is 21, b is 7, and c is 11

    };

//At this point, a is 3, b is 5, and c is not defined

    bar();

// At thsi point, a is 21, b is 5
};
