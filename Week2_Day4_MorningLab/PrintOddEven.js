



// In single for loop, printing all odd, even or prime nos
for(let i=1;i<=10;i++){

  if (i%2==0){
    console.log(i +" :even");
  }
}

var isPrime;
console.log("1 is odd");
for (var i=2;i<=20; i++){
  if (i%2==1){
    var temp = Math.floor(Math.sqrt(i));
    for(var l=2; l<=temp; l++){
        if(i%l !== 0){
          isPrime=true;
        }
      else {isPrime=false;}
    }
    if(isPrime){console.log(i+ " is prime");}
    else {
      console.log(i+ " is odd");
    }
  }
  if(i%2==0){
    console.log(i+" is even");
  }
}
