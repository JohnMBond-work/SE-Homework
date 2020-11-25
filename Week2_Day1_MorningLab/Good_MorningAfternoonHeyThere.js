//Good Morning or Good Afternoon else Hey There
// between 0459 and 1200 should say Good Morning!
// between 1159 and 1601 should say Good Afternoon
// else should say Hey There


let time = 0000

if (time >= 0500 && time < 1200) {
  console.log("Good Morning!")
}
else if (time >= 1200 && time <= 1600){
  console.log("Good Afternoon!")
}
else if (time > 1600 && time <= 1900){
  console.log("Good Evening!")
}
else if (time >1900 && time <= 2400){
  console.log("Good Night!")
}
else if (time >= 0000 && time < 0500){
  console.log("Good Night!")
}
else console.log("Hey There!")
