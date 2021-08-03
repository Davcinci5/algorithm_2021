//Flatten an array, Recursive and iterative implementation
//imperative approach
 


function flatten_recursive(array,i = 0, newArray =[]) {
    if(i === array.length) return newArray;
    if(Array.isArray(array[i])){
        newArray.push(...flatten_recursive(array[i]))
    }else {
        newArray.push(array[i]);
    }
    return flatten_recursive(array,i + 1, newArray)
}

function flatten_iterative(input){
    const newArray = [];
    let i = 0,
        actual_array = input,
        previous_indexandArray = [];

    while(i<actual_array.length || previous_indexandArray.length!==0){ 
        let element =  actual_array[i];
        if(!Array.isArray(element)){
            if(element!==undefined ) newArray.push(element);
            if(i>actual_array.length-1){
                let previous = previous_indexandArray.pop();
                i = previous.index;
                actual_array = previous.array;
            }
            i++;
        }else{
            previous_indexandArray.push({index:i,array:actual_array});
            actual_array = element;
            i = 0;
        }
    }
    return newArray;
}

module.exports = {flatten_iterative, flatten_recursive};
