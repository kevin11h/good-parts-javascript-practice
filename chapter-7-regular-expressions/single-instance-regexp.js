function make_a_matcher() {
  return /a/gi;
}

var x = make_a_matcher();
var y = make_a_matcher();

// Beware: x and y are the same object!

x.lastIndex = 10;

document.writeln(y.lastIndex);  // 10
