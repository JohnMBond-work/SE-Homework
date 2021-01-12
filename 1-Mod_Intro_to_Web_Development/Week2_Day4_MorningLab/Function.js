



const bar = function fun0(param1){
  console.log("callback start");
  param1();
}

function fun1(){
console.log("function 1");
}

bar(fun1);

bar(  ()=>{
  console.log("function 1")
})
