//Log all pairs of array
const box =['a', 'b', 'c', 'd', 'e'];
function logAllParisOfArray(input){
  for(let i = 0; i < input.length; i++){
    for (let j =0; j<input.length; j++){
      console.log(input[i],input[j]);
    }
  }
}

logAllParisOfArray(box)