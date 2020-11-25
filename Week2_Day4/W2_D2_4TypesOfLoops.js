//The four different types of loops

//for loop

for(i=1; i<=10; i++){
     console.log(i);
 }
console.log("===============")

//while Loop

var i=1;
while(i<=10){
  console.log(i);
  i++;
}
console.log("===============")

//do while Loop

var i=1;
do {
  console.log(i);
  i++;
}
while(i<=10);
console.log("===============")

//foreach or forin loop

var sub = [1,2,3];
for(i in sub)
  console.log(sub[i]);
