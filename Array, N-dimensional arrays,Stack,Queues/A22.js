/*/"There is a set of N fish that are of varying sizes (no two are alike) and travel in one of 
two possible directions. Initially all fish are alive. When the fish meet each other, the larger 
fish will eat the smaller fish. Determine how many fish will be alive at the end of any given arrangement.

example:
-------------------------------------------------------------
      <-2   6->    1->     <-7  <-5   4->   <-3
-------------------------------------------------------------

4 fish remain"

<- 0 left
-> 1 right
*/



const fish = set =>{
let stackRight = [];
let alive = 0;
for(let i=0;i<set.length;i++){
      let [n,d] = set[i];
      if(d === 0){
            while(stackRight.length != 0){
                  let element = stackRight.pop();
                  if(n < element){
                        stackRight.push(element);
                        break;
                  }   
            }
      if(stackRight.length === 0)alive++;
      }
      else stackRight.push(n);
            
}

return(alive+stackRight.length);
}

module.exports =fish;