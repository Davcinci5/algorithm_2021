//Determine if a series of parenthesis are balanced, and if not, how many parenthesis are missing.
//O(n)
const missingParenthesis = (serie) => {
let counterLeft = counterRight = 0;
for (let i = 0; i <serie.length; i++) {
    if(serie[i] === '('){
        counterLeft++;
    }else{
        if(counterLeft > 0) {
            counterLeft--;
        }else{
            counterRight++;
        }
    }
}
return counterLeft + counterRight;
};

module.exports = missingParenthesis;