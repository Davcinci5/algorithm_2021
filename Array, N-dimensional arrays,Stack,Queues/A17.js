//Optimize space through triangular arrays

class Optimized {
  constructor(matrix) {
     this.N = matrix.length;
     this.optimized = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = i+1; j < matrix.length; j++) {
        this.optimized.push(matrix[i][j]);
      }
    }
  }
  getIndex(levelX,levelY){
    let x = 0;
    for (let i = levelX; i > 0; i--){
      x+=(this.N-i);
    }
    let y = (levelY -1) - (levelX);
    return x + y;
  }

  getValue(x,y) {
    if(x >= this.N || y >= this.N) throw new Error('out of bound');
    if(x === y) return 0;
    return x > y ? this.optimized[this.getIndex(y,x)] : 
                   this.optimized[this.getIndex(x,y)];
    }
  get length(){
    return this.optimized.length;
  }
  }

  module.exports = Optimized;

