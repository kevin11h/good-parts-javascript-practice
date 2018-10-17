// object.hasOwnProperty(name)

var a = {member: true};
var b = {Object.create(a);  
var a=hasOwnProperty('member'); // true
var u = hasOwnProperty('member'); // false
var v = b.member; // true
