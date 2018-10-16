var myObject = (function() {
    var value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    };

}());

// Create a maker function called quo.  It makes an
// object with a get_status method and a private
// status property.

var quo = function (status) {
    return {
        get_status:function () {
            return status;
        }
    };
};

// Make an instance of quo.

var myQuo = quo("amazed");

document.writeln(myQuo.get_status());


// Define a function that sets a DOM node's color
// to yellow and then fades it to white

var fade = function (node) {

    var level = 1;
    var step = function () {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };

    setTimeout(step, 100);

};



