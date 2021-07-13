//Merge two sorted arrays where one has enough space at the end for the other
let arre1 =[1,2,5,7,9].concat(new Array(5));
    let arre2 = [0,3,4,6,8];

function merge(arre1,arre2){
    let pointerL,pointerS,large,short;
    if(arre1.length > arre2.length){
        large = arre1;
        short =arre2;
        pointerL = arre1.length -arre2.length -1;
        pointerS = arre2.length -1;
    }else {
        large = arre2;
        short = arre1;
        pointerL = arre2.length -arre1.length -1;
        pointerS = arre1.length -1;
    }  
    for(let i=large.length -1;i>=0;i--){
        large[i] = large[pointerL] > short[pointerS] || pointerS < 0 ? large[pointerL--] : short[pointerS--];
    }
return large;

}

// console.log(merge(arre1,arre2));
module.exports = merge;