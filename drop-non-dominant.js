//Drop non dominants
//Big O(n + n^2) 
//After drop the non dominant -> O(n^2)
function printAllNumbersAndAllPairSums (numbers){
  console.log('These are the numbers:');
  numbers.forEach(function(number){
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber){
    numbers.forEach(function(secondNumber){
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersAndAllPairSums([1,2,3,4,5])