// Maximum value of an array without using loops
const maxValueFunction = (array) =>{
    const recursiveFunction = (index = 0,initial = 0) => {
        if(index === array.length) return initial;
        const actualValue = array[index];
        if(actualValue > initial){
            initial = actualValue;
        }
        return recursiveFunction(++index, initial);
    }
    const maxValue = recursiveFunction();
    return maxValue;
}


module.exports = maxValueFunction;


