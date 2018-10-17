// string.charAt(pos)

var name = 'Curly';
var initial = name.charAt(0); // initial is 'C'

// charAt could be implemented as
// returns character at position pos in the string
var name = 'Curly';
var initial = name.charAt(0);  // initial is 'C'

String.method('charAt', function(pos) {
    return this.slice(pos, pos + 1);
});

// string.charCodeAt(pos)
var name = 'Curly';
var initial = name.charCodeAt(0); // initial is 67

// string.concat(string...)

var s = 'C'.concat('a', 't');  // s is 'Cat'

// string.indexOf(searchString, position)
var text = 'Mississippi';
var p = text.indexOf('ss'); // p is 2
p = text.indexOf('ss', 3); // p is 5
p = text.indexOf('ss', 6); // ps i -1

// string.lastIndexOf(searchString, position)
// searches from end of the string instead of front
var text = 'Mississippi';
var p = text.lastIndexOf('ss'); // p is 5
p = text.lastIndexOf('ss', 3); // p is 2
p = text.lastIndexOf('ss', 6); // p is 5

// string.localeCompare(that)
var m = ['AAA', 'A', 'aa', 'a', 'Aa', 'aaa'];
m.sort(function(a, b) {
    return a.localeCompare(b);
});
// m (in some locale) is
// ['a', 'A', 'aa', 'Aa', 'aaa', 'AAA']


// string.match(regexp)
var text = '<html><body bgcolor=linen<p>' + 'This is <b>bold<\/b>!<\/p><\/body><\/html>';
var tags = \[^<>]+|(\/?)([AZa-z]+)([^<>]*)>/g;
var a, i;

a = text.match(tags);
for (i = 0; i < a.length; i +=1) {
  document.writeln(('// [' + '] ' + a[i]).entityify());
}


// string.replace(searchValue, replaceValue)

