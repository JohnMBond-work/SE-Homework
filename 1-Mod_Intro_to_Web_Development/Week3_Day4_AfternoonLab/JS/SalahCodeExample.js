// class Animal {
//   constructor (name, age, color, legs, superPower){
//     this.name = name;
//     this.age = age;
//     this.color = color;
//     this.legs = legs;
//     this.superPower = superPower;
//   }
//
//   userSuperPower(){
//     console.log("my super power is: " + this.superPower);
//   }
//
//   sleep(){
//     console.log(this.name + " needs some sleep:");
//   }
//
//   play(){
//     console.log(this.name + " needs to play!");
//   }
// }
//
// const cat = new Animal("cat",2,"brown",4,"flight");
// console.log(cat);
// cat.userSuperPower();
// cat.sleep();
// cat.play();
//
//
//
// const dog = new Animal("dog",4,"pink",6,"sonic bark");
// console.log(dog);
// dog.userSuperPower();
// dog.sleep();
// dog.play();

//------------------------------------------------------

class User{
  constructor (firstName, lastName, department){
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
  }

  changeDepartment(newDepartment){
    this.department = newDepartment;
  }
}

const userA = new User("uA_FN", "uA_LN", "HR");
console.log(userA);
userA.changeDeparment("PD");
console.log(userA);

const userB = new User("uB_FN", "uB_LN", "PD");
console.log(userB);
userB.changeDeparment("CEO");
console.log(userB);

const userC = new User("uC_FN", "uC_LN", "CEO");
console.log(userC);
userC.changeDeparment("HR");
console.log(userC);
