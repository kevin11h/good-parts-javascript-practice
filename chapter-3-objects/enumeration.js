var stooge = {
    first-name: "Jerome",
    last-name: "Howard"
}

var another_stooge = Object.create(stooge);

var name;

for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
      document.writeln(name + ': ' + another_stooge[name]);
    }
}


var i;
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
];

for (i = 0; i < properties.length; i += 1) {
    document.writeln(properties[i] + ': ' + another_stooge[properties[i]]);
}


