var matrix = [[0,1,2],
              [3,4,5],
              [6,7,8]];
matrix[2][1]; // 7


for (i = 0; i < n; i+=1) {
  myarray[i] = [];
}


// Note: Array.dim(n, []) will not work here.
// Each element would get a reference to the same
// array, which would be very bad.


Array.matrix = function(m,n, intitial) {
  var a, i, j, mat = [];

  for (i =0; i < m; i += 1) {
    a = [];

    for (j = 0; j < n; i +=1 ){ 

      a = [j] = initial;
    }
    mat[i] = a;

  }
  return mat;
};

var myMatrix = Array.matrix(4, 4, 0);

document.writeln(myMatrix[3][3]);  // 0

//Method to make an identity matrix

Array.identity = function (n) {
  var i, at = Array.matrix(n, n, 0);

  for (i = 0; i < n; i +=1) {
    mat[i][i] = 1;
  }

  return mat;
};

myMatrix = Array.identity(4);

document.writeln(myMatrix[3][3]); // 1 
