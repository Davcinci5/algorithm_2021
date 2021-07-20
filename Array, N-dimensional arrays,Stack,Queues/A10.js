// //Shuffle an array
function shuffle(array){
    let newPos,temp;
    for(let i = 0; i < array.length; i++){
        newPos = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[newPos];
        array[newPos] = temp;
    }
}

module.exports = shuffle;
