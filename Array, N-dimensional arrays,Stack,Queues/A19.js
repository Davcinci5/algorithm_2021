//Determine if a series of parenthesis are balanced, and if not, how many parenthesis are missing.

const missingParenthesis = (serie) => {
    let index = counter = 0,value;
    while(serie[index]){
        value = serie[index] ==='(' ? 1 : -1;
        counter += value;
        index++;
    }
    return Math.abs(counter);
};
