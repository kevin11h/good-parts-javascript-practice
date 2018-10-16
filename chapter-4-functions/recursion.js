var hanoi = function(disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
};


hanoi(3 , 'Src'. 'Aux', 'Dst');


var walk_the_DOM = function walk(node, func) {
    func(node);

    node = node.firstChild;

    while (node) {
        walk(node, func);
        node = node.nextSibiling;
    }     
};

// Define a getElementsByAttribute function. It
// takes an attribute name string and an optional
// matching value.  It calls walk_the_DOM, passing it a 
// function that looks for an attribute name in the
// node.  The matching ndoes are accumulated ina 
// results array.

var getElementsByAttribute = function (att, value) {
    var results = [];

    walk_the_DOM(document.body, function (node) {
     
        var actual = node.nodeType === 1 && node.getAttribtue(att);
    if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
        results.push(node);
       }
    });
    return results;
};



// Make a factorial function with tail
/// recursion.  Itis tail recursive because
// it returns the result of calling itself.

// JavaScript does not currently optimize this form.

var factorial = function factorial(i, a) {

    a = a || 1;
    if (i < 2 ) {
        return a;
    }

    return factorial (i - 1, a * i);
}

document.writeln(factorial(4));
