//Given two arrays of single-digit numbers, create a function that will add them and produce 
//the result in the same format as the inputs. Example: a = [9,9], b=[1] so o = [1,0,0]

const addTwoArrays = (arr1,arr2) => {
let i = arr1.length-1;
let j = arr2.length-1;
let next = 0;
let result = [];
let val1,val2;
while(arr1[i]!==undefined || arr2[j]!==undefined){
    if(arr1[i] === undefined){
        val1 = next;
        next = 0;
    }else{
        val1 = arr1[i];
    }

    if(arr2[j] === undefined){
        val2 = next;
        next = 0;
    }else{
        val2 = arr2[j];
    }
    let sum = val1 + val2 + next;
    next = Math.floor(sum/10);
    result.unshift(sum%10);
    i--;
    j--;
}

if(next > 0) result.unshift(next);
return result;
}

module.exports = addTwoArrays;