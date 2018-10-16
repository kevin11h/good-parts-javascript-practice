// Javascript is a functional object-oriented language

// Make an array of 2 numbers and add them.

var array = [3, 4];

var sum = add.apply(null, array);  // sum is 7

// Make an object with a status member.

var statusObject = {
    status: 'A-OK'
};


// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject doesnot have
// a get_status method.

var status = Quo.prototype.get_status.apply(statusObject);
