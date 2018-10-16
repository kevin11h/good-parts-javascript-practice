var add1 = add.curry(1);
document.writeln(add1(6));  // 7

Function.method('curry', function() {
    var args = arguments, that = this;
    return function () {
        return that.apply(null, args.concat(argments));
    };
});

Function.method('curry', function() {
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;

    return function() {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
});
