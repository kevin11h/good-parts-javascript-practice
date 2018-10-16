var empty_object = {};

var stooge = {
  "first-name": "Jerome",
  "last-name": "Howard"
};

// Retrieval
stooge["first-name"]

// Update
stooge['first-name'] = 'Jerome';

// Augment
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
  model: 'Boeing 777'
};

flight.status = 'overdue'

// Reference
// Objects are passed around by reference, never copied
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
  // nick is 'Curly' because x and stooge
  // are references to the same object

var a = {}, b = {}, c= {};

  // a , b, and c all referto a 
  // different empty object


a = b = c = {};
  // a , b, and c all refer to
  // the same empty object


