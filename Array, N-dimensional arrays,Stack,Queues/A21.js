// "Given a set of N cars that travel at the same speed but may be 
//    traveling in opposite direction, write a function that will determine
//    the number of times cars will pass each other.

//cpeo = cars passing each toher
const cpeo = function(set){
    let gotoleft = total = 0;
    for (let i = 0; i < set.length; i++) {
        if(set[i] === 1) gotoleft++;
        else total += gotoleft;        
    }
    return total;
}

module.exports = cpeo;
