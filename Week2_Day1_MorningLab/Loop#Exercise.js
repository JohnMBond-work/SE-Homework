//Loop Exercise printing One# upto Seven#'s'

//Countup from 1 to 100 #'s'
for(let count = 0; count < 100; count++){
  for(let i=0; i<=count ; i++){
    process.stdout.write("#");
  }
  console.log();
}

//Countdown from 100 to 1 #'s'
for(let count = 0; count <= 100; count++){
  for(let i=100; i>=count ; i--){
    process.stdout.write("#");
  }
  console.log();
}
