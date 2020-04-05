
// 4) Write a code that multiplies two matrices together. Dimension validation required.

 'use strict';

class MatrixMultiply{
  constructor(a, b){
    this.a = a;
    this.b = b; 
  }

multiplyMatrices() {
  // Warunki zachowania 2-wymiarowości i liczby kolumn i wierszy 
    if (!Array.isArray(this.a) || !Array.isArray(this.b) || !this.a.length || !this.b.length) {
        throw new Error('Array should be 2-dimentional!');
    }
    if (b.length !== a[0].length) {
      throw new Error('Number of columns and rows of first and second matrix should be the same!');
    }
 
    let x = this.a.length,
        z = this.a[0].length,
        y = this.b[0].length;

    let matrixRow = Array.apply(null, new Array(y)).map(Number.prototype.valueOf, 0);
    let matrix = new Array(x);
    for (let p = 0; p < x; p++) {
        matrix[p] = matrixRow.slice();
    }

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            for (let k = 0; k < z; k++) {
                matrix[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return matrix;
}
}


let a = [
    [-2, 1, 3, 1],
    [4, 5, -6, 1],
    [1, 1, -1, 1],
    [2, -2, 2, -2]
];


let b = [
    [2, -4, 6, -3, 4],
    [-2, 7, 8, -7, 3],
    [3, -6, 9, 6, 7],
    [1, 1, -1, 1, 1]
];


let myMatrix = new MatrixMultiply(a, b);
let result = myMatrix.multiplyMatrices().join();

console.log(result); 
