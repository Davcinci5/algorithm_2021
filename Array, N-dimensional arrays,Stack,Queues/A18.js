//,Optimize,storing,a,sparse,matrix


 class Optimized{
     constructor(matrix){
         this.obj = (function(){
             const non_zero = {};
             for (let i = 0; i < matrix.length; i++) {
                 for (let j = 0; j < matrix[i].length; j++) {
                    if(matrix[i][j] !== 0){
                        if(!non_zero[i])non_zero[i]={};
                        non_zero[i][j] = matrix[i][j];
                    }         
                 } 
             }
             return non_zero;
         })();
         this.topToDown = matrix.length;
         this.leftToRight = matrix[0].length;

     }
    getElement(x,y){
        if(x >= this.topToDown || y >= this.leftToRight) return null;
        if(!this.obj[x] || !this.obj[x][y]) return 0;
        return this.obj[x][y];
    }

 }
 module.exports =Optimized;







