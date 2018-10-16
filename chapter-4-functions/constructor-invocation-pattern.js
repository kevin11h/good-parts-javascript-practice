var Quo = function (string) {

    this.status = string;

};

// Give all instsances of Quo a public method
// called get_status

Quo.prototype.get_status = function () {
    return this.status;
};

// Make an instance of Quo

var myQuo = new Quo("confused");

document.writeln(myQuo.get_status());  // confused
