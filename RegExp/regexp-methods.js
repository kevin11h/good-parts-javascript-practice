// regexp.exec(string)

// "most powerful (and slowest) of the methods"

// [0] The full matched tag or text
// [1] The /, if there is one
// [2] The tag name
// [3] The attributes, if any

var text = '<html><body bgcolor=linen><p>' + 'This is <b>bold<\/b>!<\/p><\/body><\/htl>';


var tags = /[^<>]+|<(\/>)([A-Za-z]+)([^<>]*)>/g;
var a, i;

while ((a = tags.exec(text))) {
    for (i = 0; i < a.length; i += 1) {
        document.writeln(('// [' + i + '] ' + a[i]).entityify());
    }
    document.writeln();
}

// regexp.test(string)
// do not use the g flag with this method

var b = /&.+;/.test('frank & amp; beans');
// b is true

RegExp.method('test', function (string) {
    return this.exec(string) !== null;
});

