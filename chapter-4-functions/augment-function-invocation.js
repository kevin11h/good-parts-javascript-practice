var add = function (a, b) {
    return a + b;
}

// Augment myObject with a double method.
myObject.double = function() {

    var that = this;    // Workaround.

    var helper = function () {
        that.value = add(that.value, that.value);
    };

    helper();    // Invoke helper as a function
};

// Invoke double as a method.

myObject.double();
document.writeln(myObject.value);

