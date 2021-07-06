// Maximum value of an array without using loops
const maxValueFunction = (array) =>{
    const recursiveFunction = (values,initial = 0) => {
        if(values.length === 0) return initial;
        const actualValue = values.pop();
        if(actualValue > initial){
            initial = actualValue;
        }
        return recursiveFunction(values, initial);
    }
    const maxValue = recursiveFunction(array);
    return maxValue;
}


module.exports = maxValueFunction;


