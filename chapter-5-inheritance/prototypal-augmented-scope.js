var block = function () {

  // Remember the current scope. Make a new scope that
  // includes everything from the current one.

  var oldScope = scope;
  scope = Object.create(scope);

  // Advance past the left curly brace
  advance('}');


  // Parse using the new scope.

  parse(scope);

  // Advance past the right curly brace and discard the
  // new scope, restoring the old one.

  advance('}');

  scope = oldScope;
};

