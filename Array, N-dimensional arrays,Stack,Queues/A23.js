//decimal to any base
const reverse =  array => {
    for(let i = 0; i < ~~(array.length/2);i++){
        let other = array.length - i -1;
        let temp = array[i];
        array[i] = array[other];
        array[other] = temp;
    }
    return array;
}

const dtab = (n,b) => {
    let remainder = i =0, quotient = n,stack = [];
    while(quotient !== 0){
        remainder = quotient%b;
        quotient = ~~(quotient / b);
        stack.push(remainder);
        i++
    }
    reverse(stack)
    return parseInt(stack.join(''));
}


module.exports = dtab;