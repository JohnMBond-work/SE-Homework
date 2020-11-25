//The four different types of loops

//for loop counting down from 10 to 1

for(i=10; i>=1; i--){
     console.log(i);
 }
console.log("for loop ===============")

//while Loop counting down from 10 to 1

var i=10;
while(i>=1){
  console.log(i);
  i--;
}
console.log("while loop ===============")

//do while Loop counting down from 10 to 1

var i=10;
do {
  console.log(i);
  i--;
}
while(i>=1);
console.log("do while loop ===============")

//foreach or forin loop

var sub = [1,2,3,4,5,6,7,8,9,10];
for(i in sub)
  console.log(sub[i]);
  console.log("foreach or forin loop ==============")
