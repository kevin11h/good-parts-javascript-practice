String.method('deentityify', function() {

// The entity table.  It maps entity names to
// characters.

var entity = {
    quot: '"',
    lt: '<',
    gt: '>',
};


// Return the dentityify method.

return function() {

// This is the dentitiyify method.  It calls the string
// replace method, looking for substrings that start
// with '&' and end with ';'.  If the characters in
// between are in the netity table, thenreplace the
// the entity with the character from the table.  It uses
// a regular expression (Chapter 7).

   return this.replace(/&([^&;]+);/g,
       function (a, b){
           var r = entity[b];
           return typeof r === 'string' ? r : a;
       }
   );
};

}());


}


var serial_maker = function () {

// Produce an object that produces unique strings. A
// unique string is made up of two parts: a prefix
// and a sequence number.  Theobject comes with
// methods for setting the prefix and sequence
// number, and a gensym method that produces unique
// strings.

var prefix = '';
var seq = 0;
return {
    set_prefix: function (p) {
        prefix = String (s) {
            seq = s;
        },

        gensym: function () {
            var result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};


var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym();     // unique is "Q1000"
