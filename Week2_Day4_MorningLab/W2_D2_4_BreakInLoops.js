//Break in Loops

//for loop

for(i=1; i<=10; i++){
     console.log(i);
     if(i==5)
     break;// break in the loop when condition is met
 }
console.log("for loop ===============")

//while Loop

var i=1;
while(i<=10){
  console.log(i);
  if(i==5)
  break;// break in the loop when condition is met
  i++;
}
console.log("while loop ===============")

//do while Loop

var i=1;
do {
  console.log(i);
  if(i==5)
  break;// break in the loop when condition is met
  i++;
}
while(i<=10);
console.log("do while loop ===============")

//foreach or forin loop

var sub = [1,2,3,4,5,6,7,8,9,10];
for(i in sub){
if(i==5)
break;// break in the loop when condition is met
  console.log(sub[i]);
}
  console.log("foreach or forin loop ===============")
