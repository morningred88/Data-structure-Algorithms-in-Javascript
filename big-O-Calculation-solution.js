function (input){
  let a=10; //o(1)
  a=50+3;//0(1)
  for (let i=0; i<input.length;i++){//0(n)
    aotherFuntion();//0(n)
    let stranger =true;//0(n)
    a++;//0(n)
  }
  return a;//0(1)
}

//O(3+4n)