//Check if an expression consisting of parenthesis, square brackets and curly brackets is balanced.
const isBalanced =  (serie)=>{
  const open = { '(':')','{':'}','[':']' };
  const stack = [];
  for (let i=0; i<serie.length; i++){
    if(open[serie[i]]){
      stack.push(serie[i]);
    }else{
      if(serie[i] !== open[stack[stack.length-1]]) return false;
      stack.pop();
    }
  }
  return stack.length === 0; 
}

module.exports = isBalanced;
