// Every object is linked to a prototype object
if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}



// prototype link has no effect on updating
// changes to object prototype is not touched
// only usedin retrieval

var another_stooge = Object.create(stooge);

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';


stooge.profession = 'actor';
another_stooge.profession // 'actor'


// Reflection
// inspect an object to determine which properties it has and examine values obtained

typeof flight.number // 'number'
typeof flight.status // 'string'
typeof flight.arrival //'object'
typeof flight.manifest // 'undefined'

typeof flight.toString // 'function'
typeof flight.constructor // 'function'

flight.hasOwnProperty('number') // true
flight.hasOwnProperty('constructor') // false


