// Make a regular expression object that matches
// a Javascript string.

var my_regexp = /"(?:\\.|[^\\\"])*"/g;


// With constructor

var my_regexp = new RegExp("'(?:\\\\.|[^\\\\\']*'", 'g');
